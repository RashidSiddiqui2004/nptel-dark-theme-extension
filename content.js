let darkModeEnabled = false;

function applyDarkModeToImages() {
    const images = document.querySelectorAll('.yui-img');

    images.forEach(img => {
        img.style.filter = 'brightness(0.6) contrast(1.5)';
    });
}

function removeDarkModeFromImages() {
    // Select all images on the page
    const images = document.querySelectorAll('img');

    // Loop through each image and remove the filters
    images.forEach(img => {
        img.style.filter = ''; // Reset filter
    });
}

function applyDarkTheme() {

    document.body.style.backgroundColor = "black";

    const mainbody = document.getElementById("gcb-main-body");

    if (mainbody) {
        mainbody.style.backgroundColor = "#211d1d";
        mainbody.style.color = "white";
    }


    const assignmentDiv = document.getElementById("gcb-main-article");

    if (assignmentDiv) {
        assignmentDiv.style.backgroundColor = "#313131";
    }

    document.querySelectorAll('.gcb-aside').forEach(elem => {
        elem.style.background = "#313131";
    });


    const assignmentTitleDiv = document.querySelector(".assessment-top-info");
    if (assignmentTitleDiv) {
        const assignmentMsg = assignmentTitleDiv.querySelector('strong');
        if (assignmentMsg) {
            assignmentMsg.style.backgroundColor = "#242424"; // Dark background color
            assignmentMsg.style.color = "wheat"; // Light text color
            assignmentMsg.style.padding = "5px"; // Add padding
            assignmentMsg.style.borderRadius = "10px"; // Round corners
        }
    }

    const emailDiv = document.querySelector(".dropdown");
    if (emailDiv) {
        const emailidElement = emailDiv.querySelector('a');
        if (emailDiv) {
            emailidElement.style.color = "white";
        }
    }

    // handle sidebar

    const sidebarButtons = document.querySelectorAll(".unit_heading");

    if (sidebarButtons) {
        sidebarButtons.forEach(elem => {
            const btnTitle = elem.querySelector('a');
            if (btnTitle) {
                btnTitle.style.color = '#ffffff';

                elem.addEventListener('mouseover', () => {
                    elem.style.backgroundColor = '#2b2c2b';
                    btnTitle.style.color = '#ffffff';
                });

                elem.addEventListener('mouseout', () => {
                    btnTitle.style.color = '#ffffff';
                    elem.style.backgroundColor = '';
                });
            }
        });
    }

    const sideBarMenu = document.querySelector('.gcb-col-12 ');

    if (sideBarMenu) {
        sideBarMenu.style.backgroundColor = '#1e1d1d';
    }

    const subunitsElement = document.querySelectorAll(".subunit_navbar_current");

    if (subunitsElement) {
        const currentLiElements = subunitsElement.querySelectorAll(".subunit_other");

        currentLiElements.forEach(elem => {
            elem.style.backgroundColor = '#c1c1c1';

            const proxy = elem.querySelector('div');
            if (proxy) {
                const textelem = proxy.querySelector('a');
                if (textelem) {
                    textelem.style.color = '#ffffff';
                }
            }
        });
    }
 
    const deadlineForAssgment = document.querySelector('.gcb-submission-due-date');

    if (deadlineForAssgment) { deadlineForAssgment.style.color = '#f09f09'; }

    document.querySelectorAll('.qt-question').forEach(elem => {
        elem.style.color = '#ffffff';
    });

    const qtFeedbackElements = document.querySelectorAll('.qt-feedback');

    qtFeedbackElements.forEach(feedbackElement => {

        // Select the .feedback-header inside the current .qt-feedback element
        const feedbackHeader = feedbackElement.querySelector('.feedback-header');

        if (feedbackHeader) {
            // Select all .correct and .incorrect elements inside the .feedback-header
            const correctElements = feedbackHeader.querySelectorAll('.correct');
            const incorrectElements = feedbackHeader.querySelectorAll('.incorrect');

            // Handle correct elements
            if (correctElements.length > 0) {
                // Style the first .correct element
                const firstCorrectElement = correctElements[0];
                firstCorrectElement.style.color = '#04f8a2'; // Set the color to green

                // Create a tick mark span and append it to the first correct element
                const tickMark = document.createElement('span');
                tickMark.textContent = ' ✔️';
                firstCorrectElement.appendChild(tickMark);

                // Style the second .correct element if it exists
                if (correctElements.length > 1) {
                    const secondCorrectElement = correctElements[1];
                    secondCorrectElement.style.color = '#04f8a2';
                }
            }

            // Handle incorrect elements
            if (incorrectElements.length > 0) {
                // Style the first .incorrect element
                const firstIncorrectElement = incorrectElements[0];
                firstIncorrectElement.style.color = '#fd1600'; // Set the color to red

                // Create a cross mark span and append it to the first incorrect element
                const crossMark = document.createElement('span');
                crossMark.textContent = ' ❌';
                firstIncorrectElement.appendChild(crossMark);

                // Style the second .incorrect element if it exists
                if (incorrectElements.length > 1) {
                    const secondIncorrectElement = incorrectElements[1];
                    secondIncorrectElement.style.color = '#fd1600';
                }
            }
        }
    });

    // Style .faculty-answer elements
    document.querySelectorAll('.faculty-answer').forEach(element => {
        element.style.color = '#0de2cc';
    });

    const introCourseLecture = document.querySelectorAll('.gcb-lesson-content');

    if (introCourseLecture.length > 1) {
        const intro = introCourseLecture[1].querySelector('span');

        if (intro) {
            intro.style.color = 'white';
        }
    }

    const videoTranscriptDiv = document.getElementById('video-transcript-container');
    if (videoTranscriptDiv) {
        videoTranscriptDiv.style.backgroundColor = '#373533';

        videoTranscriptDiv.style.borderColor = '#332f2f';

    }

}

function applyLightTheme() {
    const mainbody = document.getElementById("gcb-main-body");

    if (mainbody) {
        mainbody.style.backgroundColor = ""; // Reset background color to default
        mainbody.style.color = ""; // Reset text color to default
    }

    const assignmentDiv = document.getElementById("gcb-main-body");
    if (assignmentDiv) {
        assignmentDiv.style.backgroundColor = ""; // Reset background color to default
    }

    const assignmentTitleDiv = document.querySelector(".assessment-top-info");
    if (assignmentTitleDiv) {
        const assignmentMsg = assignmentTitleDiv.querySelector('strong');
        if (assignmentMsg) {
            assignmentMsg.style.backgroundColor = ""; // Reset background color to default
            assignmentMsg.style.color = ""; // Reset text color to default
            assignmentMsg.style.padding = ""; // Remove padding
            assignmentMsg.style.borderRadius = ""; // Remove border radius
        }
    }

    // Dropdown
    const emailDiv = document.querySelector(".dropdown");
    if (emailDiv) {
        const emailidElement = emailDiv.querySelector('a');
        if (emailidElement) {
            emailidElement.style.color = "black"; // Reset text color to default
        }
    }

    // Handle sidebar
    const sidebarButtons = document.querySelectorAll(".unit_heading");
    sidebarButtons.forEach(elem => {
        const btnTitle = elem.querySelector('a');
        if (btnTitle) {
            btnTitle.style.color = ""; // Reset text color to default

            elem.removeEventListener('mouseover', () => {
                elem.style.backgroundColor = '#2b2c2b'; // Dark background on hover
                btnTitle.style.color = '#ffffff'; // Light text color on hover
            });

            elem.removeEventListener('mouseout', () => {
                btnTitle.style.color = '#ffffff'; // Reset text color
                elem.style.backgroundColor = ''; // Reset background color
            });
        }
    });

    // Handle subunits
    const subunitsElement = document.querySelector(".subunit_navbar_current");
    if (subunitsElement) {
        const currentLiElements = subunitsElement.querySelectorAll(".subunit_other");
        currentLiElements.forEach(elem => {
            elem.style.backgroundColor = ''; // Reset background color to default

            const proxy = elem.querySelector('div');
            if (proxy) {
                const textelem = proxy.querySelector('a');
                if (textelem) {
                    textelem.style.color = ''; // Reset text color to default
                }
            }
        });
    }

    // Handle deadlines
    const deadlineForAssignment = document.querySelector('.gcb-submission-due-date');
    if (deadlineForAssignment) {
        deadlineForAssignment.style.color = ''; // Reset color to default
    }

    // Handle question text color
    document.querySelectorAll('.qt-question').forEach(elem => {
        elem.style.color = ''; // Reset text color to default
    });

    // Apply background color to '.gcb-aside' elements
    document.querySelectorAll('.gcb-aside').forEach(elem => {
        elem.style.backgroundColor = ''; // Reset background color to default
    });

    // Handle feedback elements
    const qtFeedbackElements = document.querySelectorAll('.qt-feedback');
    qtFeedbackElements.forEach(feedbackElement => {
        const feedbackHeader = feedbackElement.querySelector('.feedback-header');
        if (feedbackHeader) {
            // Handle correct elements
            const correctElements = feedbackHeader.querySelectorAll('.correct');
            correctElements.forEach(correctElement => {
                correctElement.style.color = ''; // Reset text color to default
                const tickMarks = correctElement.querySelectorAll('span');
                tickMarks.forEach(tickMark => tickMark.remove()); // Remove tick marks
            });

            // Handle incorrect elements
            const incorrectElements = feedbackHeader.querySelectorAll('.incorrect');
            incorrectElements.forEach(incorrectElement => {
                incorrectElement.style.color = ''; // Reset text color to default
                const crossMarks = incorrectElement.querySelectorAll('span');
                crossMarks.forEach(crossMark => crossMark.remove()); // Remove cross marks
            });
        }
    });

    // Style faculty answers
    document.querySelectorAll('.faculty-answer').forEach(element => {
        element.style.color = ''; // Reset text color to default
    });

    const introCourseLecture = document.querySelectorAll('.gcb-lesson-content');

    if (introCourseLecture.length > 1) {
        const intro = introCourseLecture[1].querySelector('span');

        if (intro) {
            intro.style.color = '';
        }
    }

    const videoTranscriptDiv = document.getElementById('video-transcript-container');
    if (videoTranscriptDiv) {
        videoTranscriptDiv.style.backgroundColor = '';
        videoTranscriptDiv.style.borderColor = '';
    }
}

// Function to toggle dark theme
function toggleDarkTheme() {

    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled) {
        applyDarkModeToImages();
        applyDarkTheme();
    } else {
        removeDarkModeFromImages();
        applyLightTheme();
    }

    // const isDarkMode = document.body.classList.toggle('dark-theme');  
}

// Listen for the message from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggleDarkMode') {
        toggleDarkTheme();
    }
});
