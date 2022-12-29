// Global variables

'use strict';

export const APP_NAME = "MyDataCollector";
export const COLLECTION_NAME = "Data Collection";
export const CALIBRATION_NAME = "Emotion Calibration";
export const LABELLING_NAME = "Data Labelling";
export const TRACING_NAME = "Sensor Tracing";
export const OVERVIEW_NAME = "Overview"; 

export const TAB_NAMES = [OVERVIEW_NAME, COLLECTION_NAME, CALIBRATION_NAME, LABELLING_NAME, TRACING_NAME]

export const TAB_LINKS = TAB_NAMES.map(function (e) {
    return e.replace(/\s/g, "");
  });

export const TABS = TAB_NAMES.map(function(e, i) {
    return {name: e, link: TAB_LINKS[i]};
})