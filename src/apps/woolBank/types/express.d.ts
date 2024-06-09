import express from "express";

declare global{
  namespace Express {
    export interface Request {
      userId?: number;
      authType?: string;
    }
  }
}