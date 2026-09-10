export interface APIResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}

export interface APIErrorResponse {
  success: false;
  statusCode: number;
  message: string;
  errors?: Record<string, string[]>;
}

export interface RequestOptions {
  headers?: Record<string, string>;
  token?: string;
  signal?: AbortSignal;
}
