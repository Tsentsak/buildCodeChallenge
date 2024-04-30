export interface Photo {
  id: string,
  author: string,
  download_url: string
}

export interface PhotoState {
  photos: Photo[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}
