import{g as i,i as s,j as a,k as l,l as o,m as F,F as m,N as p}from"./@pixi-b8f6a876.js";import"./eventemitter3-8913522c.js";import"./earcut-290938c5.js";import"./url-79de4292.js";const t={AlphaFilter:s,BlurFilter:a,BlurFilterPass:l,ColorMatrixFilter:o,DisplacementFilter:F,FXAAFilter:m,NoiseFilter:p};Object.entries(t).forEach(([r,e])=>{Object.defineProperty(t,r,{get(){return i("7.1.0",`filters.${r} has moved to ${r}`),e}})});