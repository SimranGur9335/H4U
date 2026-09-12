import os
import joblib
import pandas as pd
from transformers import pipeline


# --------------------------------------------------
# Paths
# --------------------------------------------------

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_DIR = os.path.join(BASE_DIR, "models")

MODEL_PATH = os.path.join(
    MODEL_DIR,
    "h4u_severity_xgboost.pkl"
)

FEATURE_PATH = os.path.join(
    MODEL_DIR,
    "h4u_emotion_features.pkl"
)

LABEL_PATH = os.path.join(
    MODEL_DIR,
    "h4u_severity_labels.pkl"
)


# --------------------------------------------------
# Load ML components
# --------------------------------------------------

severity_model = joblib.load(MODEL_PATH)

feature_names = joblib.load(FEATURE_PATH)

severity_labels = joblib.load(LABEL_PATH)


# --------------------------------------------------
# Load emotion model
# --------------------------------------------------

emotion_classifier = pipeline(
    "text-classification",
    model="SamLowe/roberta-base-go_emotions",
    top_k=None
)


# --------------------------------------------------
# Extract emotion features
# --------------------------------------------------

def extract_emotion_features(text):

    predictions = emotion_classifier(text)

    if predictions and isinstance(predictions[0], list):
        predictions = predictions[0]

    features = {
        item["label"]: item["score"]
        for item in predictions
    }

    return features


# --------------------------------------------------
# Predict severity
# --------------------------------------------------

def predict_distress(text):

    if not text or not text.strip():
        raise ValueError("Text cannot be empty.")

    # Extract NLP features
    features = extract_emotion_features(text)

    # Convert to DataFrame
    features_df = pd.DataFrame([features])

    # Match training feature order
    features_df = features_df.reindex(
        columns=feature_names,
        fill_value=0
    )

    # Predict class
    prediction = severity_model.predict(features_df)[0]

    # Predict probabilities
    probabilities = severity_model.predict_proba(features_df)[0]

    predicted_severity = severity_labels[int(prediction)]

    confidence = float(probabilities[int(prediction)])

    return {
        "predicted_severity": predicted_severity,
        "confidence": round(confidence, 4)
    }


# --------------------------------------------------
# Local test
# --------------------------------------------------

if __name__ == "__main__":

    test_text = (
        "I have been feeling overwhelmed and scared lately. "
        "I cannot sleep properly and I feel exhausted all the time."
    )

    result = predict_distress(test_text)

    print("H4U Severity Prediction")
    print("-----------------------")
    print("Severity:", result["predicted_severity"])
    print("Confidence:", result["confidence"])
