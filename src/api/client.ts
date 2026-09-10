import { APIResponse, RequestOptions } from '../types/api';

/**
 * Minimal API Client Interface stub for H4U web application.
 * Designed to cleanly interface with FastAPI backend in future phases.
 */
export interface APIClientInterface {
  get<T>(endpoint: string, options?: RequestOptions): Promise<APIResponse<T>>;
  post<T, D>(endpoint: string, data: D, options?: RequestOptions): Promise<APIResponse<T>>;
  put<T, D>(endpoint: string, data: D, options?: RequestOptions): Promise<APIResponse<T>>;
  delete<T>(endpoint: string, options?: RequestOptions): Promise<APIResponse<T>>;
}

export class APIClient implements APIClientInterface {
  private baseUrl: string;

  constructor(baseUrl: string = import.meta.env.VITE_API_BASE_URL || '/api/v1') {
    this.baseUrl = baseUrl;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public async get<T>(_endpoint: string, _options?: RequestOptions): Promise<APIResponse<T>> {
    throw new Error('APIClient method not implemented in Phase 1 Foundation.');
  }

  public async post<T, D>(_endpoint: string, _data: D, _options?: RequestOptions): Promise<APIResponse<T>> {
    throw new Error('APIClient method not implemented in Phase 1 Foundation.');
  }

  public async put<T, D>(_endpoint: string, _data: D, _options?: RequestOptions): Promise<APIResponse<T>> {
    throw new Error('APIClient method not implemented in Phase 1 Foundation.');
  }

  public async delete<T>(_endpoint: string, _options?: RequestOptions): Promise<APIResponse<T>> {
    throw new Error('APIClient method not implemented in Phase 1 Foundation.');
  }
}

export const apiClient = new APIClient();
