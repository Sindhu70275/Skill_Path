export const APP_TITLE = "Skill Path";

//landing
export const LANDING_SUBTITLES = {
  QUOTE: "Learn. Grow. Succeed.",
  AUTHOR: "Your journey to mastery starts here",
};

export const LANDING_BUTTON_LABELS = {
  LOGIN: "Login",
  JOIN_PROGRAM: "Join the Program",
};

//auth
export const AUTH_TITLES = {
  LOGIN: "Sign In to Skill Path",
  REGISTER: "Create Account for Skill Path",
};

export const AUTH_LABELS = {
  EMAIL: "Email",
  PASSWORD: "Password",
  FULL_NAME: "Full Name",
};

export const AUTH_BUTTON_LABELS = {
  SIGN_IN: "Sign In",
  CREATE_ONE: "Create One",
  SIGNING_IN: "Signing In...",
  CREATE_ACCOUNT: "Create Account",
  CREATING_ACCOUNT: "Creating Account...",
};

export const AUTH_LINK_TEXTS = {
  REGISTER_FROM_LOGIN: "Don’t have an account?",
  LOGIN_FROM_REGISTER: "Already have an account?",
};

export const AUTH_VALIDATION = {
  EMAIL_REQUIRED: "Email is required",
  EMAIL_INVALID: "Please enter a valid email address",
  PASSWORD_REQUIRED: "Password is required",
  PASSWORD_MIN_LENGTH: "Password must be at least 8 characters",
  PASSWORD_PATTERN:
    "Password must contain uppercase, lowercase, number, special char (@$!%*?&) ",
  FULL_NAME_REQUIRED: "Full name is required",
  FULL_NAME_MIN_LENGTH: "Full name must be at least 3 characters",
  FULL_NAME_MAX_LENGTH: "Full name must be max 50 characters",
  FULL_NAME_PATTERN: "Full name can only contain letters and spaces",
};

// discover
export const DISCOVER_LABELS = {
  NO_MATCHES_TITLE: "No matches yet",
  NO_MATCHES_SUBTITLE: "Try adjusting your search or filters.",
  SEARCH_PLACEHOLDER: "Search for skills by name",
  FILTER: "Filter",
  SEARCH_SKILLS: "Search skills...",
  NO_SKILLS_FOUND: "No skills found",
  CLEAR_ALL: "Clear all",
  COMING_SOON: "Coming Soon",
};

export const DISCOVER_ERRORS = {
  LOAD_SKILLS: "Failed to load skills. Please try again.",
};

export const DISCOVER_BUTTONS = {
  ENROLLING: "Enrolling...",
  ENROLLED: "Enrolled",
  ENROLL: "Enroll",
  SEE_MORE: "See More",
};

// skilldetail
export const SKILL_DETAIL_LABELS = {
  TAGS: "Tags",
  WHAT_YOULL_LEARN: "What you'll learn",
  PREREQUISITES: "Prerequisites",
  COURSE_MODULES: "Course Modules",
  DURATION: "Duration",
  MODULES: "Modules",
  LEVEL: "Level",
};

export const SKILL_DETAIL_ERRORS = {
  NOT_FOUND: "Skill not found",
  LOAD_FAILED: "Failed to load skill details. Please try again.",
};

// course
export const COURSE_LABELS = {
  LESSONS: "lessons",
  MODULES: "modules",
  SHARE: "Share",
  UNENROLL: "Unenroll",
};

export const COURSE_BUTTONS = {
  MARK_COMPLETE: "Mark as completed",
  COMPLETED: "Completed",
};

export const COURSE_PROGRESS = {
  WATCHED: "% watched",
};

export const COURSE_MESSAGES = {
  COPY_SUCCESS: "Copied course URL to clipboard!",
  COPY_FAILED: "Failed to copy URL. Please copy manually.",
  LESSON_COMPLETE: "Lesson completed successfully!",
  LESSON_COMPLETE_FAILED: "Failed to mark as completed",
};

// dashboard
export const DASHBOARD_LABELS = {
  ENROLLED: "Enrolled",
  WISHLIST: "Wishlist",
  NO_ENROLLED_TITLE: "No enrolled skills yet",
  NO_ENROLLED_SUBTITLE:
    "Enroll in skills from the Discover page to get started.",
  NO_WISHLIST_TITLE: "No wishlisted skills yet",
  NO_WISHLIST_SUBTITLE: "Add skills to your wishlist from the Discover page.",
  START_LEARNING: "Start Learning",
  ENROLL_NOW: "Enroll Now",
  ACHIEVED: "% Achieved",
  VIEW_DETAILS: "View Details",
  REMOVE_WISHLIST: "Remove from wishlist",
  WISHLISTED_ON: "Wishlisted on",
};

export const DASHBOARD_BUTTONS = {
  VIEW_FAQS: "View FAQs →",
};

export const DASHBOARD_HEADER_MESSAGES = [
  "Unlock your potential with SkillPath – your journey to mastery starts here!",
  "Discover new skills and advance your career with SkillPath's curated learning paths.",
  "SkillPath - Where learning meets opportunity. Explore, learn, and grow.",
  "Empower yourself with SkillPath – personalized skills for a brighter future.",
];

export const PROFILE_TITLES = {
  WIDGET: "Learning Goals",
  DIALOG_GOAL: "Set Your Weekly Learning Goal",
  RECENT_ACTIVITY: "Recent Activity",
  CONTINUE_LEARNING: "Continue Learning",
  EDIT_PROFILE: "Edit Profile",
};

//profile
export const PROFILE_LABELS = {
  GOAL_SUBTITLE: "How many lessons do you want to complete per week?",
  LESSONS_PREVIEW: "{lessons} lessons per week",
  CURRENT_GOAL: "Current goal: {goal} lessons/week",
  LESSONS: "Lessons",
  STREAK: "Streak: {streak} Days",
  SET_GOAL: "Set Your Goal!",
  NO_ACTIVITY: "No recent activity. Get started with your first lesson!",
  FULL_NAME: "Full Name",
  CHANGE_PHOTO: "Change Photo",
  MINS: "{duration} mins",
};

export const PROFILE_BUTTONS = {
  SET_GOAL: "Set Goal",
  CANCEL: "Cancel",
  SAVE_GOAL: "Save Goal",
  EDIT_PROFILE: "Edit Profile",
  RESUME: "Resume",
  REVISIT_LESSON: "Revisit Lesson",
  NEXT_LESSON: "Next Lesson",
  SAVE_CHANGES: "Save Changes",
};

export const PROFILE_CHIP_LABELS = {
  COMPLETED: "Completed",
  IN_PROGRESS: "In Progress",
};

export const PROFILE_ERRORS = {
  UPDATE_PROFILE: "Failed to update profile",
};
