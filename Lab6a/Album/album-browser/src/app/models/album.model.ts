// src/app/models/album.model.ts
export interface Album {    
  userId: number; 
  id: number;
  title: string;
  artist: string; }

export interface Photo {  
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}