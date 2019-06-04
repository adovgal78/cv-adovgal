// var strTemplate = `<h1>strTemplate</h1>`;
// var strJSX = (<h1>strJSX</h1>);
// alert(strTemplate);
// alert(strJSX);


var cvResume = document.getElementById("cvResume");
var slider = document.getElementById("colorRange");
var output = document.getElementById("value");
var navigation = document.getElementById("navigation");
var navColor = document.getElementById("navColor");
var navSource = document.getElementById("navSource");
var navTemplate = document.getElementById("navTemplate");
var selectColor = document.getElementById("selectColor");
var selectTemplate = document.getElementById("selectTemplate");
var selectADovgal = document.getElementById("selectADovgal");
// var selectJohnFrontEnd = document.getElementById("selectJohnFrontEnd");
var selectJoeBackend = document.getElementById("selectJoeBackend");
var selectJobDesigner = document.getElementById("selectJobDesigner");
var selectJanePM = document.getElementById("selectJanePM");
var selectBlank = document.getElementById("selectBlank");
var cvSource = document.getElementById("cvSource");
var cvResume = document.getElementById("cvResume");
var achievement = document.getElementById("achievement");
var experience = document.getElementById("experience");
var skills = document.getElementById("skills");
var education = document.getElementById("education");
var languages = document.getElementById("languages");
var srcForm = document.getElementById("src-form");
var rightColumn = document.getElementById("right-column");
var address = document.getElementById("address");

var rname = document.getElementById("rname");
var rjob = document.getElementById("rjob");
var rbirthday = document.getElementById("rbirthday");
var raddress = document.getElementById("raddress");
var rtel = document.getElementById("rtel");
var rnemail = document.getElementById("remail");
var rurl = document.getElementById("rurl");
var rskype = document.getElementById("skype");
var rlinkedin = document.getElementById("rlinkedin");
var rfacebook = document.getElementById("rfacebook");
var rsummary = document.getElementById("rsummary");
var rlanguages = document.getElementById("rlanguages");

var profileInput = document.getElementById("profile-input");
var profileImgContainer = document.getElementById("profile-img-container");
var profileImg = document.getElementById("profile-img");
var profileLabel = document.getElementById('profile-label');
var cvImgLeft = document.getElementById("cv-img-left");
var cvImgRight = document.getElementById("cv-img-right");
var cvImgLeftLabel = document.getElementById("cv-img-left-label");
var cvImgRightLabel = document.getElementById("cv-img-right-label");

var slides = document.getElementsByClassName('templateContainer');
var styles = document.getElementsByClassName('style');

// var cvVersion = 'aDovgal';
var slideIndex = 1;
slides[slideIndex - 1].style.display = "block";
var object = {};

// cvResume.innerHTML = aphrodite;
objectDelivery('init');

// document.documentElement.style.setProperty('--base', 198);
// output.innerHTML = slider.value = document.documentElement.style.getPropertyValue('--base');
document.getElementsByTagName('body')[0].style.display = 'block';

function smoothScroll(ssHide, ssShow, ssId) {
    $(ssShow).show();
    $('html, body').animate({
        scrollTop: $(ssId).offset().top
    }, 500, function () {
        window.location.hash = ssId; // Add hash (#) to URL when done scrolling (default click behavior)
        $(ssHide).hide();
    });
}
//for IE9
function addClass(element, className) {
    var arr;
    arr = element.className.split(" ");
    if (arr.indexOf(className) == -1) {
        element.className += " " + className;
    }
}

function cleanForm() {
    console.log('cleanForm');
    while (achievement.children[1]) {
        achievement.children[1].parentNode.removeChild(achievement.children[1]);
    }
    while (experience.children[1]) {
        experience.children[1].parentNode.removeChild(experience.children[1]);
    }
    while (skills.children[1]) {
        skills.children[1].parentNode.removeChild(skills.children[1]);
    }
    while (education.children[1]) {
        education.children[1].parentNode.removeChild(education.children[1]);
    }
    while (languages.children[1]) {
        languages.children[1].parentNode.removeChild(languages.children[1]);
    }
    for (var i = 0; i < srcForm.elements.length; i++) {
        srcForm.elements.item(i).value = "";
    }
}

function formToObject() {
    console.log('formToObject');
    object = {};
    for (var i = 0; i < srcForm.elements.length; i++) {
        object[srcForm.elements.item(i).id] = srcForm.elements.item(i).value;
    }
}

function objectToForm(imgSrc) {
    console.log('objectToForm');
    cleanForm();
    if (Object.keys(object).length !== 0 && object.constructor === Object) {
        makeGroups('achievement');
        makeGroups2('experience');
        makeGroups('skills');
        makeGroups('education');
        makeGroups('languages');
        for (var i = 0; i < srcForm.elements.length; i++) {
            srcForm.elements.item(i).value = object[srcForm.elements.item(i).id];
        }
    }
    if (imgSrc) {
        profileImg.style.display = 'block';
        profileLabel.style.display = 'none';
        profileImg.src = imgSrc; //
        console.log('objectToForm imgSrc');
    } else {
        profileImg.style.display = 'none';
        profileLabel.style.display = 'block';
    }
}

function objectToCV(imgSrc) {
    var rKey;
    var rname = document.getElementById("rname");
    // var rjob = document.getElementById("rjob");
    // var rbirthday = document.getElementById("rbirthday");
    var raddress = document.getElementById("raddress");
    var address = document.getElementById("address");

    // console.log('objectToCV:'+imgSrc);
    if (object['first-name'] || object['last-name']) {
        rname.style = 'display:block';
        rname.innerHTML = object['first-name'] + ' ' + object['last-name'];
    } else {
        rname.style = 'display:none';
    }
    var a;
    if (object['address']) {
        a = 1;
        raddress.style = 'display:block';
        var innerArray = raddress.innerHTML.split('</i>');
        raddress.innerHTML = innerArray[0] + '</i>' + object['address'];
        raddress.setAttribute('href', 'https://www.google.com/maps/place/' + object['address']);
    } else {
        address.style.display = 'none';
    }

    for (key in planeProps) {
        rKey = document.getElementById('r' + key);
        if (rKey) {
            if (object[key]) {
                rKey.style.display = 'block';
                rKey.innerHTML = object[key];
            } else {
                rKey.style.display = 'none';
            }
        }
    }
    // var rightColumn = document.getElementById("right-column");
    for (key in aProps) {
        rKey = document.getElementById('r' + key);
        // console.log(key, document.getElementById("address").innerHTML);
        // alert(raddress.innerHTML);
        if (object[key] != '' && typeof object[key] != "undefined") {
            a = 1;
            rKey.style.display = 'block';
            var hrefArray = rKey.getAttribute('href').split(':');
            var valueColonArray = object[key].split(':');
            var valueSlashArray = object[key].split('/');
            var innerArray = rKey.innerHTML.split('</i>');
            if (object[key].endsWith('/')) {
                rKey.innerHTML = innerArray[0] + '</i>' + valueSlashArray[valueSlashArray.length - 2];
            } else {
                rKey.innerHTML = innerArray[0] + '</i>' + valueSlashArray[valueSlashArray.length - 1];
            }
            if (valueColonArray.length == 1) {
                rKey.setAttribute('href', hrefArray[0] + ':' + valueColonArray[0]);
            } else {
                rKey.setAttribute('href', object[key]);
            }
        } else {
            rKey.style.display = 'none';
        }
    }

    if (a !== 1) {
        address.style.display = 'none';
    } else {
        address.style.display = 'block';
    }

    makeCVSection('languages');
    makeCVSection('achievement');
    makeCVSection('education');
    makeCVSection('skills');
    makeCVSection('experience');

    var cvImgLeft = document.getElementById("cv-img-left");
    var cvImgRight = document.getElementById("cv-img-right");
    var rightColumn = document.getElementById("right-column");
    // var profileImg = document.getElementById("profile-img");
    // var profileLabel = document.getElementById('profile-label');
    if (!cvImgRight) {
        if (imgSrc) {
            if (imgSrc === 'same' && profileImg.style.display === 'none') {
                rightColumn.style.backgroundImage='none';
            } else {
                rightColumn.style.backgroundImage='url('+imgSrc+')';
                // console.log('objectToCV !cvImgRight imgSrc !same backgroun-image: '+rightColumn.style.backgroundImage)
            }
        } else {
            rightColumn.style.backgroundImage='none';
        }
    } else if (imgSrc) {
        // console.log('objectDelivery imgSrc imgSrc: '+imgSrc);
        // alert(imgSrc);
        if (imgSrc === 'same') {
            if (profileImg.style.display === 'none') {
                cvImgLeft.style.display = 'none';
                cvImgRight.style.display = 'none';
                // cvImgLeftLabel.style.display = 'block';
                // cvImgRightLabel.style.display = 'block';
            } else {
                cvImgLeft.style.display = 'block';
                cvImgRight.style.display = 'block';
                // cvImgLeftLabel.style.display = 'none';
                // cvImgRightLabel.style.display = 'none';
                cvImgLeft.src = profileImg.src; //
                cvImgRight.src = profileImg.src; //
            }
        } else {
            cvImgLeft.style.display = 'block';
            cvImgRight.style.display = 'block';
            // cvImgLeftLabel.style.display = 'none';
            // cvImgRightLabel.style.display = 'none';
            cvImgLeft.src = imgSrc; //
            cvImgRight.src = imgSrc; //
        }
    } else {
        cvImgLeft.style.display = 'none';
        cvImgRight.style.display = 'none';
        // cvImgLeftLabel.style.display = 'block';
        // cvImgRightLabel.style.display = 'block';
    }
}

function makeCell(container, inputId, placeholder, caption, type) {
    var col = document.createElement('div');
    container.appendChild(col);
    col.className = "has-float-label col-50";
    var input = document.createElement(type);
    col.appendChild(input);
    input.setAttribute("id", inputId);
    var label = document.createElement('label');
    col.appendChild(label);
    label.setAttribute("for", inputId);
    input.setAttribute("placeholder", placeholder);
    label.innerHTML = caption;
    switch (type) {
        case 'input':
            input.setAttribute("type", "text");
            break;
        case 'textarea':
            input.setAttribute("class", "textarea-3");
            label.setAttribute("class", "textarea-label-3");
    }
}

function makeGroup(pressedDiv) {
    var inputId = pressedDiv.id + pressedDiv.children.length; //
    var labelId = pressedDiv.children.length; //-
    var div = document.createElement('div');
    pressedDiv.appendChild(div); //
    div.className = "clearfix skills-set";

    switch (pressedDiv.id) {
        case 'achievement':
            makeCell(div, inputId, "Experience", "Achievement #" + labelId, "input");
            makeCell(div, "value" + inputId, "15 years", "Value #" + labelId, "input");
            break;
        case 'skills':
            makeCell(div, inputId, "HTML5", "Skill #" + labelId, "input");
            makeCell(div, "value" + inputId, "75%", "Value #" + labelId, "input");
            break;
        case 'education':
            makeCell(div, inputId, "Harvard University", "Institution #" + labelId, "input");
            makeCell(div, "value" + inputId, "Doctor of Philosophy (PhD)", "Degree #" + labelId, "input");
            break;
        case 'languages':
            makeCell(div, inputId, "English", "Language #" + labelId, "input");
            makeCell(div, "value" + inputId, "fluent", "Level #" + labelId, "input");
    }
}

function makeGroup2(pressedDiv) {
    var inputId = pressedDiv.id + pressedDiv.children.length;
    var labelId = pressedDiv.children.length;
    var div = document.createElement('div');
    pressedDiv.appendChild(div);

    var div1 = document.createElement('div');
    div.appendChild(div1);
    div1.className = "clearfix skills-set";
    var div2 = document.createElement('div');
    div.appendChild(div2);
    div2.className = "clearfix";

    switch (pressedDiv.id) {
        case 'experience':
            makeCell(div1, '1' + inputId, "Google", "Company #" + labelId, "input");
            makeCell(div1, '1' + "value" + inputId, "2000-2010", "Time #" + labelId, "input");
            makeCell(div2, '2' + inputId, "Chief executive officer", "Job #" + labelId, "input");
            makeCell(div2, '2' + "value" + inputId, "- Making high-level decisions\n- Essential management\n- Communication role", "Duties #" + labelId, "textarea");
    }
}

function makeGroups(container) {
    var numOfContainer = 0;
    for (key in object) {
        if (key.indexOf(container) != -1) {
            numOfContainer++;
        }
    }
    for (var i = 0; i < numOfContainer; i += 2) {
        makeGroup(document.getElementById(container));
    }
}

function makeGroups2(container) {
    var numOfContainer = 0;
    for (key in object) {
        if (key.indexOf(container) != -1) {
            numOfContainer++;
        }
    }
    for (var i = 0; i < numOfContainer; i += 4) {
        makeGroup2(document.getElementById(container));
    }
}

function makeCVSection(section) {
    var rSection = document.getElementById('r' + section);
    console.log('makeCVSection section: ' + section)
    // if (object[section + '1'] != '' || object['value' + section + '1'] != '') {
    if (rSection) {
        if (object[section + '1'] || object['1' + section + '1']) {
            rSection.style.display = 'block';
            var tSection = document.getElementById('t' + section);
            while (tSection.parentNode.firstChild != tSection) {
                tSection.parentNode.removeChild(tSection.parentNode.firstChild);
            }
            var numOfItem = 0;
            for (key in object) {
                if (key.indexOf(section) != -1) {
                    numOfItem++;
                }
            }
            var itemTemplate = tSection.parentNode.innerHTML;
            var itemInterim, itemResult = '';
            if (section == 'experience') {
                for (var i = 1; i <= numOfItem / 4; i++) {
                    itemInterim = itemTemplate.replace('tKey', object['1' + section + i]);
                    itemInterim = itemInterim.replace('tValue', object['1' + 'value' + section + i]);
                    itemInterim = itemInterim.replace('t1Key', object['2' + section + i]);

                    var itemObject = object['2' + 'value' + section + i];
                    itemObject = itemObject.split('\n');
                    var itemString = '';
                    for (j = 0; j < itemObject.length; j++) {
                        itemString = itemString + '<li>' + itemObject[j] + '</li>';
                    }
                    itemInterim = itemInterim.replace('t1Value', itemString);

                    itemInterim = itemInterim.replace(' id="t' + section + '" style="display: none"', '');
                    itemResult = itemResult + itemInterim;
                }
            } else {
                for (var i = 1; i <= numOfItem / 2; i++) {
                    itemInterim = itemTemplate.replace('tKey', object[section + i]);
                    itemInterim = itemInterim.replace('tValue', object['value' + section + i]);
                    itemInterim = itemInterim.replace(' id="t' + section + '" style="display: none"', '');
                    itemResult = itemResult + itemInterim;
                }
            }
            itemResult = itemResult + itemTemplate;
            tSection.parentNode.innerHTML = itemResult;
        } else {
            rSection.style.display = 'none';
        }
    }
}

slider.oninput = function () {
    setColor(this.value);
    // var cvImgRight = document.getElementById("cv-img-right");
    // var rightColumn = document.getElementById("right-column");
    // output.innerHTML = this.value;
    // localStorage.setItem('color', this.value);//
    // if (this.value === '0') {
    //     console.log('slider.oninput 0')
    //     document.documentElement.style.setProperty('--sp', '0%');
    //     document.documentElement.style.setProperty('--spA', '0%');
    //     document.documentElement.style.setProperty('--ss', '0%');
    //     document.documentElement.style.setProperty('--ssA', '0%');
    //     document.documentElement.style.setProperty('--ssB', '0%');
    //     document.documentElement.style.setProperty('--spage', '0%');
    //     try {
    //         cvImgRight.classList.add('img-gray');
    //     } catch (e) {}
    //     try {
    //         rightColumn.classList.add('img-background-gray');
    //     } catch (e) {}
    // } else {
    //     document.documentElement.style.setProperty('--base', this.value);//
    //     document.documentElement.style.setProperty('--sp', '78%');
    //     document.documentElement.style.setProperty('--spA', '78%');
    //     document.documentElement.style.setProperty('--ss', '14%');
    //     document.documentElement.style.setProperty('--ssA', '20%');
    //     document.documentElement.style.setProperty('--ssB', '20%');
    //     document.documentElement.style.setProperty('--spage', '78%');
    //     try {
    //         cvImgRight.classList.remove('img-gray');
    //     } catch (e) {}
    //     try {
    //         rightColumn.classList.remove('img-background-gray');
    //     } catch (e) {}
    // }
}

function setColor(color) {
    var cvImgRight = document.getElementById("cv-img-right");
    var cvImgLeft = document.getElementById("cv-img-left");
    var rightColumn = document.getElementById("right-column");
    rightColumn.style.backgroundColor = 'var(--primary)';
    output.innerHTML = slider.value = color;
    localStorage.setItem('color', color); //
    if (color === '0') {
        console.log('slider.oninput 0');
        document.documentElement.style.setProperty('--base', color);
        document.documentElement.style.setProperty('--sp', '0%');
        document.documentElement.style.setProperty('--spA', '0%');
        document.documentElement.style.setProperty('--ss', '0%');
        document.documentElement.style.setProperty('--ssA', '0%');
        document.documentElement.style.setProperty('--ssB', '0%');
        document.documentElement.style.setProperty('--spage', '0%');
        try {
            cvImgRight.classList.add('img-gray');
            cvImgLeft.classList.add('img-gray');
        } catch (e) {}
        try {
            rightColumn.classList.add('img-background-gray');
        } catch (e) {}
    } else {
        document.documentElement.style.setProperty('--base', color); //
        document.documentElement.style.setProperty('--sp', '78%');
        document.documentElement.style.setProperty('--spA', '78%');
        document.documentElement.style.setProperty('--ss', '14%');
        document.documentElement.style.setProperty('--ssA', '20%');
        document.documentElement.style.setProperty('--ssB', '20%');
        document.documentElement.style.setProperty('--spage', '78%');
        try {
            cvImgRight.classList.remove('img-gray');
            cvImgLeft.classList.remove('img-gray');
        } catch (e) {}
        try {
            rightColumn.classList.remove('img-background-gray');
        } catch (e) {}
    }
}

cvResume.addEventListener('mouseover',function (e){
    document.getElementsByTagName('nav')[0].style.display='none';
    document.getElementsByTagName('aside')[0].style.display='none';
});

cvResume.addEventListener('mouseleave',function (e){
    document.getElementsByTagName('nav')[0].style.display='block';
    document.getElementsByTagName('aside')[0].style.display='block';
});

srcForm.addEventListener('change', function (e) {
    cvVersion = '';
    if (typeof (Storage) !== "undefined") {
        formToObject();
        localStorage.setItem('object', JSON.stringify(object));
        objectToCV('same');
    } else {
        console.log('No Web Storage support..');
    }
});

navColor.addEventListener("click", function (e) {
    e.preventDefault();
    navSource.style = 'text-decoration: none';
    // navTemplate.style = 'text-decoration: none';
    e.target.style = 'text-transform: uppercase; background-color: var(--secondaryB);';
    // selectColor.style = 'display: block';
    // selectTemplate.style = 'display: block';
    // selectPattern.style = 'display: none';

    // objectToCV();
    smoothScroll("#cvSource", "#cvResume", "#cvResume");

});

navSource.addEventListener("click", function (e) {
    e.preventDefault();
    // navColor.style = 'text-decoration: none';
    // navTemplate.style = 'text-decoration: none';
    navColor.style = 'text-transform: capitalize; background-color: transparent;';
    e.target.style = 'text-transform: uppercase; background-color: var(--secondaryB);';
    // selectColor.style = 'display: none'; // must be none
    // selectTemplate.style = 'display: none';
    // selectPattern.style = 'display: block';

    smoothScroll("#cvResume", "#cvSource", "#cvSourceh1");
});

selectADovgal.addEventListener("click", function (e) {
    if (confirm("Do you really want to load John Doe's data?")) {
        objectDelivery('adovgal');
    }
});
// selectJohnFrontend.addEventListener("click", function (e) {
//     if (confirm("Do you really want to load John Doe's data?")) {
//         objectDelivery('john');
//     }
// });
selectJoeBackend.addEventListener("click", function (e) {
    if (confirm("Do you really want to load John Doe's data?")) {
        objectDelivery('joe');
    }
});
selectJobDesigner.addEventListener("click", function (e) {
    if (confirm("Do you really want to load John Doe's data?")) {
        objectDelivery('job');
    }
});
selectJanePM.addEventListener("click", function (e) {
    if (confirm("Do you really want to load John Doe's data?")) {
        objectDelivery('jane');
    }
});

selectBlank.addEventListener("click", function (e) {
    if (confirm("Do you really want to clean the data?")) {
        objectDelivery('blank');
    }
});

srcForm.addEventListener("click", function (e) {
    var pressedDiv = e.target.parentNode.parentNode; // div - container for ul & rows
    var childCols = pressedDiv.lastChild.children; // arr of cols from last row for one dimention / arr of rows from last row for two dimention

    if (pressedDiv.className == "skills-group") {
        if (pressedDiv.children.length > 1 && childCols[0].children[0].value == "" && childCols[1].children[0].value == "") {
            pressedDiv.removeChild(pressedDiv.lastChild);
        } else {
            makeGroup(pressedDiv);
        }
    } else if (pressedDiv.className == "skills-group2") {
        if (pressedDiv.children.length > 1 && childCols[0].children[0].children[0].value == "" && childCols[1].children[0].children[0].value == "" && childCols[0].children[1].children[0].value == "" && childCols[1].children[1].children[0].value == "") {
            pressedDiv.removeChild(pressedDiv.lastChild);
        } else {
            makeGroup2(pressedDiv);
        }
    }
});

selectTemplate.addEventListener('click', function (e) {
    console.log('selectTemplate');
    var i;
    if (e.target && (e.target.matches('img') || e.target.matches('div'))) {
        // console.log('img ' + e.target);
    } else {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            styles[i].rel = 'alternate stylesheet';
            // console.log(slides[i]);
        }
        // console.log(e.target);
        if (e.target.className === 'next') {
            // console.log('next',slideIndex);
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
        } else {
            // console.log('prev',slideIndex);
            slideIndex--;
            if (slideIndex < 1) {
                slideIndex = slides.length;
            }
        }
        slides[slideIndex - 1].style.display = "block";
    }
    // console.log(slideIndex);
    styles[slideIndex - 1].rel = 'stylesheet';
    switch (slideIndex) {
        case 1:
            cvResume.innerHTML = aphrodite;
            break;
        case 2:
            cvResume.innerHTML = tyche;
            break;
        case 3:
            cvResume.innerHTML = nike;
            break;
        case 4:
            cvResume.innerHTML = iris;
    }
    // console.log('selectTemplate slider.value:'+slider.value);
    objectDelivery('init');
    setColor(slider.value);
    // alert('s');
});

profileInput.addEventListener('change', function (e) {
    cvVersion = '';
    var profileImg = document.getElementById("profile-img");
    var loadedImage = loadImage(
        e.target.files[0],
        function (img) {
            profileImg.src = img.src;
            console.log('457');
            objectToCV(img.src);
        }, {
            noRevoke: true
        } // Options
    );
    profileImg.style.display = 'block';
    profileLabel.style.display = 'none';
});

profileImg.addEventListener("load", function () {
    var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");
    // Make sure canvas is as big as the picture
    imgCanvas.width = profileImg.width;
    imgCanvas.height = profileImg.height;
    // Draw image into canvas element
    imgContext.drawImage(profileImg, 0, 0, profileImg.width, profileImg.height);
    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    // console.log(imgAsDataURL);
    try {
        localStorage.setItem("profileImg", imgAsDataURL);
        console.log('profileImg.load');
    } catch (e) {
        console.log("Storage failed: " + e);
    }
}, false);

function objectDelivery(action) {
    console.log('objectDelivery-------------');
    // console.log(object);
    // if(typeof object === 'undefined')
    // if(object !== null) same if(object)
    // if {}:
    // because Object.keys(new Date()).length === 0;
    // we have to do some additional check
    // if(Object.keys(object).length === 0 && object.constructor === Object)
    if (object) {
        console.log('objectDelivery object');
        if (action === 'blank') {
            console.log('objectDelivery object blank');
            object = {};
            localStorage.removeItem('object');
            localStorage.removeItem('profileImg');
            objectToForm();
            objectToCV();
            setColor(aDovgalProps['color']);
            // document.documentElement.style.setProperty('--base', aDovgalProps['color']);
            // localStorage.setItem('color', aDovgalProps['color']);
            // if (cvVersion !== 'aDovgal') {
            //     object = aDovgal;
            //     objectToCV('Img/PhotoColor.jpg');
            //     cvVersion = 'aDovgal';
            // }
        } else {
            if (action === 'adovgal') {
                console.log('objectDelivery adovgal');
                object = aDovgal;
                localStorage.setItem('object', JSON.stringify(object));
                objectToCV('Img/PhotoColor.jpg');
                objectToForm('Img/PhotoColor.jpg');
                setColor(aDovgalProps['color']);
                // document.documentElement.style.setProperty('--base', aDovgalProps['color']);
                // localStorage.setItem('color', aDovgalProps['color']);
                // objectToCV(johnDoeImg['img']);
                // objectToForm(johnDoeImg['img']);
            }
            if (action === 'john') {
                console.log('objectDelivery john');
                object = johnDoe;
                localStorage.setItem('object', JSON.stringify(object));
                objectToCV('Img/john.jpg');
                objectToForm('Img/john.jpg');
                setColor(johnDoeProps['color']);
                // document.documentElement.style.setProperty('--base', johnDoeProps['color']);
                // localStorage.setItem('color', johnDoeProps['color']);
                // objectToCV(johnDoeImg['img']);
                // objectToForm(johnDoeImg['img']);
            }
            if (action === 'joe') {
                console.log('objectDelivery joe');
                object = joeDoe;
                localStorage.setItem('object', JSON.stringify(object));
                objectToCV('Img/joe.jpg');
                objectToForm('Img/joe.jpg');
                setColor(joeDoeProps['color']);
                // document.documentElement.style.setProperty('--base', joeDoeProps['color']);
                // localStorage.setItem('color', joeDoeProps['color']);
            }
            if (action === 'job') {
                console.log('objectDelivery job');
                object = jobDoe;
                localStorage.setItem('object', JSON.stringify(object));
                objectToCV('Img/job.png');
                objectToForm('Img/job.png');
                setColor(jobDoeProps['color']);
                // document.documentElement.style.setProperty('--base', jobDoeProps['color']);
                // localStorage.setItem('color', jobDoeProps['color']);
            }
            if (action === 'jane') {
                console.log('objectDelivery jane');
                object = janeDoe;
                localStorage.setItem('object', JSON.stringify(object));
                objectToCV('Img/jane.jpg');
                objectToForm('Img/jane.jpg');
                setColor(janeDoeProps['color']);
                // document.documentElement.style.setProperty('--base', janeDoeProps['color']);
                // localStorage.setItem('color', janeDoeProps['color']);
            }
            if (action === 'init') {
                console.log('objectDelivery init');
                object = JSON.parse(localStorage.getItem('object'));
                var colorStorage = localStorage.getItem("color");
                if (colorStorage) {
                    setColor(colorStorage);
                    // document.documentElement.style.setProperty('--base', colorStorage);
                } else {
                    setColor(198);
                    // document.documentElement.style.setProperty('--base', 198);
                }
                var imgStorage = localStorage.getItem("profileImg");
                if (object) {
                    console.log('objectDelivery object');
                    objectToCV(imgStorage);
                    objectToForm(imgStorage);
                    console.log('objectDelivery object init object');
                } else if (imgStorage) {
                    object = {};
                    objectToCV(imgStorage);
                    objectToForm(imgStorage);
                    console.log('2');
                } else {
                    object = {};//???????????????????
                    setColor(document.documentElement.style.getPropertyValue('--base'));
                    // output.innerHTML = slider.value = document.documentElement.style.getPropertyValue('--base');
                    console.log('3');
                    return;
                }
            }
            // cvVersion = '';

        }
        setColor(document.documentElement.style.getPropertyValue('--base'));
        // output.innerHTML = slider.value = document.documentElement.style.getPropertyValue('--base');
        if (cvSource.style.display === 'block') {
            smoothScroll("#cvResume", "#cvSource", "#cvSourceh1");
        }
    } else {
        object = {};
    }
}