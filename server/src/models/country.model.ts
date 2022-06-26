import { Schema, model } from 'mongoose';

let countrySchema = {
  name: {
    type: String,
    required: true,
  },
  centroid: {
    lat: Number,
    lng: Number,
    alti: Number,
  },
  cid: {
    type: String,
    required: true,
  },
  level: Number,
  model: String,
  zoom_level: Number,
  display_size: Number,
};

export const Country = model('country', new Schema(countrySchema));
