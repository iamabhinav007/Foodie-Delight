import { Injectable } from '@angular/core';

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  location: string;
  imageUrl?: string;
}
