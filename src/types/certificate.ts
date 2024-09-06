import { RecordModel } from 'pocketbase';

export enum Collections {
  CERTIFICATES = 'certificates',
}

export enum CollectionsFields {
  ID = 'id',
  IMAGE = 'image',
  NAME = 'name',
  LASTNAME = 'lastname',
  TITLE = 'title',

  CREATED = 'created',
  UPDATED = 'updated',
}

export interface Certificate extends RecordModel {
  [CollectionsFields.ID]: string;
  [CollectionsFields.IMAGE]: string;
  [CollectionsFields.NAME]: string;
  [CollectionsFields.LASTNAME]: string;
  [CollectionsFields.TITLE]: string;

  [CollectionsFields.CREATED]: string;
  [CollectionsFields.UPDATED]: string;
}
