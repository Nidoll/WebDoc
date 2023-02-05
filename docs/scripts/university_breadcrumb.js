window.addEventListener('load', () => {
    // Get all elements from the DOM
    var breadcrumbDOM = document.getElementById('breadcrumb');
    var fullReferrer = document.referrer.split('/');
    // Refer can be empty
    var lastRefer = fullReferrer[fullReferrer.length - 1] ? fullReferrer[fullReferrer.length - 1] : "";

    // Create new list element with link
    var newLi = document.createElement('li');
    var newA = document.createElement('a');

    // If we come from computer science
    if (lastRefer.includes('computer_science')) {
        newA.textContent = 'Computer Science';
        newA.href = 'subject_computer_science.html';
    } else if (lastRefer.includes('cybersecurity')){ // If we come from Cyber Security
        newA.textContent = 'Cyber Security';
        newA.href = 'subject_cybersecurity.html';
    } else {
        return;
        // Else do nothing and return
    }

    // Add 
    newLi.appendChild(newA);
    var lastBread = document.getElementById('lastBreadCrumbElement');
    breadcrumbDOM.removeChild(lastBread);
    breadcrumbDOM.appendChild(newLi);
    breadcrumbDOM.appendChild(lastBread);
});