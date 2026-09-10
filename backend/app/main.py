from fastapi import FastAPI

app = FastAPI(
    title="H4U Backend API",
    description="REST API for H4U Mental Health Monitoring System",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "H4U Backend API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }