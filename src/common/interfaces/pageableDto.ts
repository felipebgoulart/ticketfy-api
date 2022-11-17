export interface IPageableDTO<T> {
  page: number;
  results: T[];
}