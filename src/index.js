/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import { initJsPsych } from 'jspsych';
import surveyText from '@jspsych/plugin-survey-text';
import fullScreen from '@jspsych/plugin-fullscreen';
import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
// import imageKeyboardResponse from '@jspsych/plugin-image-keyboard-response';
import videoKeyboardResponse from '@jspsych/plugin-video-keyboard-response';
import jsPsychRdk from '@jspsych-contrib/plugin-rdk';
import jsPsychPreload from '@jspsych/plugin-preload';
import 'jspsych/css/jspsych.css';
import 'regenerator-runtime/runtime';
import { RoarFirekit } from '@bdelab/roar-firekit';

// import bullsEye from './img/bullsEye.png';
import introVideo1 from './video/Spanish_Honey_Hunt_Intro_1.mp4';
import introVideo2 from './video/Spanish_Honey_Hunt_Intro_2.mp4';
import introVideo3 from './video/Spanish_Honey_Hunt_Intro_3.mp4';
import introVideo4 from './video/Spanish_Honey_Hunt_Intro_4.mp4';
import introVideo5 from './video/Spanish_Honey_Hunt_Intro_5.mp4';
import endVideo from './video/Spanish_Honey_Hunt_End.mp4';
import levelUpVideo1 from './video/Spanish_Honey_Hunt_Level_Up_1.mp4';
import levelUpVideo2 from './video/Spanish_Honey_Hunt_Level_Up_2.mp4';
import levelUpVideo3 from './video/Spanish_Honey_Hunt_Level_Up_3.mp4';
import levelUpVideo4 from './video/Spanish_Honey_Hunt_Level_Up_4.mp4';
import levelUpVideo5 from './video/Spanish_Honey_Hunt_Level_Up_5.mp4';
import { rootDoc } from './firebaseConfig';
import jsPsychPavlovia from './jsPsychPavlovia';

// Set up all experiment related info here
const jsPsychForURL = initJsPsych();
let participantId = jsPsychForURL.data.getURLVariable('participant');
let grade = null;
const schoolId = jsPsychForURL.data.getURLVariable('schoolId') || null;

const redirectTo = jsPsychForURL.data.getURLVariable('redirectTo') || 'refresh';

const redirect = (redirectTo) => {
  if (redirectTo === 'refresh') {
    window.location.reload();
  } else {
    window.location.href = 'https://reading.stanford.edu/?g=796&c=1';
  }
};

let firekit;

const taskInfo = {
  taskId: 'honey-hunt',
  taskName: 'Honey Hunt',
  variantName: 'default',
  taskDescription:
    "In this game participants are on a trip to the moon and galaxy of stars are on their way pushing them to the left or right. To advance, participants are asked to report which way the galaxy of stars moving. They can move towards the left or right and participants need to determine which way the stars are going by pressing 'a' for left and 'l' for right.",
  variantDescription: 'Default',
  blocks: [
    {
      blockNumber: 1,
      trialMethod: '96% coherence',
      corpus: 'RDK',
    },
    {
      blockNumber: 2,
      trialMethod: 'repeat',
      corpus: 'RDK',
    },
    {
      blockNumber: 3,
      trialMethod: 'repeat',
      corpus: 'RDK',
    },
    {
      blockNumber: 4,
      trialMethod: 'repeat',
      corpus: 'RDK',
    },
    {
      blockNumber: 5,
      trialMethod: 'repeat',
      corpus: 'RDK',
    },
  ],
};

if (participantId !== undefined) {
  const minimalUserInfo = { id: participantId, schoolId };

  firekit = new RoarFirekit({
    rootDoc,
    userInfo: minimalUserInfo,
    taskInfo,
  });

  await firekit.startRun();
}

const jsPsych = initJsPsych({
  on_finish: () => {
    redirect(redirectTo);
  },
});

const timeline = [];

/* init connection with pavlovia.org */
const isOnPavlovia = window.location.href.includes('run.pavlovia.org');

if (isOnPavlovia) {
  const pavloviaInit = {
    type: jsPsychPavlovia,
    command: 'init',
  };
  timeline.push(pavloviaInit);
}

const preload = {
  type: jsPsychPreload,
  video: [
    introVideo1,
    introVideo2,
    introVideo3,
    introVideo4,
    introVideo5,
    endVideo,
    levelUpVideo1,
    levelUpVideo2,
    levelUpVideo3,
    levelUpVideo4,
    levelUpVideo5,
  ],
};
timeline.push(preload);

const getPid = {
  type: surveyText,
  questions: [
    {
      prompt: 'ID:',
      name: 'participant_info',
      placeholder: '0000',
      required: true,
    },
    {
      prompt: 'Grade:',
      name: 'Grade',
      placeholder: 'KG/G1',
      required: true,
    },
  ],
  on_finish: (data) => {
    participantId = data.response.participant_info;
    grade = data.response.Grade;
  },
};

const ifGetPid = {
  timeline: [getPid],
  conditional_function: function () {
    return !participantId;
  },
  on_timeline_finish: async () => {
    const minimalUserInfo = { id: participantId, schoolId, classId: grade };

    firekit = new RoarFirekit({
      rootDoc,
      userInfo: minimalUserInfo,
      taskInfo,
    });

    await firekit.startRun();
  },
};

timeline.push(ifGetPid);

// store info about the experiment session:
timeline.push({
  type: fullScreen,
  fullscreen_mode: true,
});

const setHtmlBgGray = () => {
  document.body.style.backgroundColor = 'gray';
};

const welcome = {
  type: htmlKeyboardResponse,
  on_start: setHtmlBgGray,
  stimulus: '<p style="font-size:48px; color:green;">Welcome to space! </p>',
  choices: 'NO_KEYS',
  trial_duration: 500,
};
timeline.push(welcome);

// ---------Create instructions - interactive---------
const intro1 = {
  type: videoKeyboardResponse,
  // on_start: setHtmlBgGray,
  stimulus: [introVideo1],
  choices: 'NO_KEYS',
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
};
timeline.push(intro1);

//interactive training 2
const intro2 = {
  type: videoKeyboardResponse,
  // on_start: setHtmlBgGray,
  stimulus: [introVideo2],
  choices: 'NO_KEYS',
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
};
timeline.push(intro2);

const intro3 = {
  type: videoKeyboardResponse,
  // on_start: setHtmlBgGray,
  stimulus: [introVideo3],
  choices: ['a'],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
};
timeline.push(intro3);

const intro4 = {
  type: videoKeyboardResponse,
  // on_start: setHtmlBgGray,
  stimulus: [introVideo4],
  choices: ['l'],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: true,
  width: 1238,
  height: 800,
};
timeline.push(intro4);

const intro5 = {
  type: videoKeyboardResponse,
  // on_start: setHtmlBgGray,
  stimulus: [introVideo5],
  choices: [' '],
  response_allowed_while_playing: true,
  response_ends_trial: true,
  trial_duration: null,
  trial_ends_after_video: false,
  width: 1238,
  height: 800,
};
timeline.push(intro5);

// const fixation = {
//   type: imageKeyboardResponse,
//   stimulus: bullsEye,
//   choices: 'NO_KEYS',
//   trial_duration: 10000,
// };
// timeline.push(fixation);

// ---------Create trials---------
// The test block where all the trials are nested. The properties here will
// trickle down to all trials in the timeline unless they have their own
// properties defined
const testBlock = {
  type: jsPsychRdk,
  // The Inter Trial Interval. You can either have no ITI, or change the display
  // element to be the same color as the stimuli background to prevent flashing
  // between trials
  timing_post_trial: 1000,
  number_of_dots: 150, // Total number of dots in the aperture
  coherent_direction: jsPsych.timelineVariable('coherent_direction'),
  coherence: jsPsych.timelineVariable('coherence'),
  correct_choice: [jsPsych.timelineVariable('correct_choice')],
  RDK_type: 3, // The type of RDK used
  aperture_type: 1, // Circle
  aperture_center_x: window.innerWidth / 2,
  aperture_center_y: window.innerHeight / 2,
  aperture_width: 700, // Matches 14deg diameter
  choices: ['a', 'l'], // Choices available to be keyed in by participant
  trial_duration: 10000, // Duration of each trial in ms
  fixation_cross: true,
  // not sure if this is the correct scale - do the virtual chin to calibrat
  fixation_cross_width: 30,
  fixation_cross_height: 30,
  fixation_cross_thickness: 7,
  dot_color: 'black',
  dot_radius: 3, // 3.4, matching 5 pixels from Elle's paper
  move_distance: 6, // Speed parameter 6 seems the calculated speed but visually is not appealing
  // Not sure where this number comes from 200ms is what we want the maximum dot life to be
  dot_life: 12,
  reinsert_type: 1,
  on_finish: function (data) {
    // eslint-disable-next-line no-param-reassign, eqeqeq
    data.accuracy = data.correct_choice == data.response;
    data.grade = grade;
    data.participant = participantId;
    data.blockType = 'test';
    data.condition = jsPsych.timelineVariable('condition');
    firekit.writeTrial(data);
  },
};

// create practice block
const practiceBlock = {
  type: jsPsychRdk,
  // The Inter Trial Interval. You can either have no ITI, or change the display
  // element to be the same color as the stimuli background to prevent flashing
  // between trials
  timing_post_trial: 1000,
  number_of_dots: 150, // Total number of dots in the aperture
  coherent_direction: jsPsych.timelineVariable('coherent_direction'),
  coherence: jsPsych.timelineVariable('coherence'),
  correct_choice: [jsPsych.timelineVariable('correct_choice')],
  RDK_type: 3, // The type of RDK used
  aperture_type: 1, // Circle
  aperture_center_x: window.innerWidth / 2,
  aperture_center_y: window.innerHeight / 2,
  aperture_width: 700, // Matches 14deg diameter
  choices: ['a', 'l'], // Choices available to be keyed in by participant
  trial_duration: 20000, // Duration of each trial in ms
  fixation_cross: true,
  // not sure if this is the correct scale - do the virtual chin to calibrate
  fixation_cross_width: 30,
  fixation_cross_height: 30,
  fixation_cross_thickness: 7,
  dot_color: 'black',
  dot_radius: 3, // 3.4, matching 5pixels from Elle's paper
  move_distance: 6, // Speed parameter 6 seems the calculated speed but visually is not appealing
  // Not sure where dot_life comes from 200ms is what we want the maximum dot life to be
  dot_life: 12,
  reinsert_type: 1,
  on_finish: function (data) {
    // eslint-disable-next-line no-param-reassign, eqeqeq
    data.accuracy = data.correct_choice == data.response;
    data.grade = grade;
    data.participant = participantId;
    data.schoolId = schoolId;
    data.blockType = 'practice';
    data.condition = jsPsych.timelineVariable('condition');
    firekit.writeTrial(data);
  },
};

// Create an array of 2 different trials (different conditions)
const practiceTrials = [
  {
    // Condition Practice
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.8,
    condition: '80% Right',
  },
  {
    // Condition Practice
    correct_choice: 'a',
    coherent_direction: 180,
    coherence: 0.8,
    condition: '80% Left',
  },
];
const practiceInfo = jsPsych.randomization.repeat(practiceTrials, 6);

const trials = [
  {
    // Condition 1
    correct_choice: 'a', // The correct answer for Condition 1
    coherent_direction: 180, // The coherent direction for Condition 1 (dots move left)
    coherence: 0.06,
    condition: '6% Left',
  },
  {
    // Condition 2
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.06,
    condition: '6% Right',
  },
  {
    // Condition 3
    correct_choice: 'a',
    coherent_direction: 180,
    coherence: 0.12,
    condition: '12% Left',
  },
  {
    // Condition 4
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.12,
    condition: '12% Right',
  },
  {
    // Condition 5
    correct_choice: 'a',
    coherent_direction: 180,
    coherence: 0.24,
    condition: '24% Left',
  },
  {
    // Condition 6
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.24,
    condition: '24% Right',
  },
  {
    // Condition 7
    correct_choice: 'a',
    coherent_direction: 180,
    coherence: 0.48,
    condition: '48% Left',
  },
  {
    // Condition 8
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.48,
    condition: '48% Right',
  },
  {
    // Condition 9
    correct_choice: 'a',
    coherent_direction: 180,
    coherence: 0.96,
    condition: '96% Left',
  },
  {
    // Condition 10
    correct_choice: 'l',
    coherent_direction: 0,
    coherence: 0.96,
    condition: '96% Right',
  },
];

// Multiply based on how many trials you need and randomize the trial order
// 6*8=48 trials a block in total 240 trials
// Double the number of trials and shuffle them
const trialInfo = jsPsych.randomization.repeat(trials, 2);

const feedbackBlock = {
  type: htmlKeyboardResponse,
  on_start: setHtmlBgGray,
  stimulus: function () {
    const lastTrialAccuracy = jsPsych.data
      .getLastTrialData()
      .values()[0].accuracy;

    if (lastTrialAccuracy) {
      return '<span style="font-size:40px;color:green;">+3!!</span>';
    }
    return '<span style="font-size:40px;color:red;">+1</span>';
  },
  choices: 'NO_KEYS',
  trial_duration: 1000,
};

// Inter block interval image
const IBI1 = {
  type: videoKeyboardResponse,
  // on_start: setHtmlBgGray,
  stimulus: [levelUpVideo1],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  width: 1238,
  height: 800,
};

const IBI2 = {
  type: videoKeyboardResponse,
  // on_start: setHtmlBgGray,
  stimulus: [levelUpVideo2],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  width: 1238,
  height: 800,
};

const IBI3 = {
  type: videoKeyboardResponse,
  // on_start: setHtmlBgGray,
  stimulus: [levelUpVideo3],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  width: 1238,
  height: 800,
};

const IBI4 = {
  type: videoKeyboardResponse,
  on_start: setHtmlBgGray,
  stimulus: [levelUpVideo4],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  width: 1238,
  height: 800,
};

const IBI5 = {
  type: videoKeyboardResponse,
  // on_start: setHtmlBgGray,
  stimulus: [levelUpVideo5],
  prompt:
    '<p>Press the Spacebar when you are ready to proceed. Remember to sit at one arm distance from the screen.</p>',
  choices: [' '],
  response_allowed_while_playing: true,
  trial_duration: null,
  width: 1238,
  height: 800,
};

const IBIEnd = {
  type: videoKeyboardResponse,
  // on_start: setHtmlBgGray,
  stimulus: [endVideo],
  response_allowed_while_playing: true,
  choices: [' '],
  trial_duration: null,
  width: 1238,
  height: 800,
  on_finish: async () => {
    await firekit.finishRun();
  },
};

// ---------Prepare the main timeline---------
const PracticeProcedure = {
  timeline: [practiceBlock, feedbackBlock],
  timeline_variables: practiceInfo,
  randomize_order: true,
  repetition: 1,
};

const MotionCohProcedure = {
  timeline: [testBlock, feedbackBlock],
  timeline_variables: trialInfo,
  randomize_order: true,
  repetition: 1,
};

timeline.push(PracticeProcedure);
timeline.push(IBI1);
timeline.push(MotionCohProcedure);
timeline.push(IBI2);
timeline.push(MotionCohProcedure);
timeline.push(IBI3);
timeline.push(MotionCohProcedure);
timeline.push(IBI4);
timeline.push(MotionCohProcedure);
timeline.push(IBI5);
timeline.push(MotionCohProcedure);
timeline.push(IBIEnd);

/* finish connection with pavlovia.org */
if (isOnPavlovia) {
  const pavloviaFinish = {
    type: jsPsychPavlovia,
    command: 'finish',
    participantId,
  };
  timeline.push(pavloviaFinish);
}

// ---------Run the experiment---------
jsPsych.run(timeline);
