export class PageableResponse<T> {
  limit?: number;
  offset?: number;
  totalResults: number;
  data: T[];
}