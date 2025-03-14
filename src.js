let nPassword = document.getElementById("npassword");
let cPassword = document.getElementById("cpassword");
const form = document.getElementById("signupform");
const visibilityToggle = document.getElementById("passwordvisibility");
const lowercaseCheck = document.getElementById("lowerletter");
const uppercaseCheck = document.getElementById("upperletter");
const lengthCheck = document.getElementById("length");
const matchCheck = document.getElementById('match');
const passwordHeading = document.getElementById("extext");
const lowerRegExp = /[a-z]/;
const upperRegExp = /[A-Z]/;
let nPasswordValue;
let cPasswordValue;

nPassword.addEventListener("input", (e) => {

  nPasswordValue = e.target.value;

if (cPasswordValue) {
	if (nPasswordValue != cPasswordValue) {
		matchCheck.classList.remove('valid');
		matchCheck.classList.add('invalid');
    nPassword.classList.remove('valid2');
		nPassword.classList.add('invalid2');
    cPassword.classList.remove('valid2');
		cPassword.classList.add('invalid2');
    
	} else {
		matchCheck.classList.add('valid');
		matchCheck.classList.remove('invalid');
    nPassword.classList.add('valid2');
		nPassword.classList.remove('invalid2');
    cPassword.classList.add('valid2');
		cPassword.classList.remove('invalid2');
	}
}

if (cPasswordValue){
if (lowerRegExp.test(nPasswordValue) && upperRegExp.test(nPasswordValue) && nPasswordValue.length >= 8 && nPasswordValue === cPasswordValue) {
  nPassword.classList.add('valid2')
  nPassword.classList.remove('invalid2')
} else {
  nPassword.classList.add('invalid2');
  nPassword.classList.remove('valid2');
}
} else {
  if (lowerRegExp.test(nPasswordValue) && upperRegExp.test(nPasswordValue) && nPasswordValue.length >= 8) {
    nPassword.classList.add('valid2');
		nPassword.classList.remove('invalid2');
  } else {
    nPassword.classList.add('invalid2');
		nPassword.classList.remove('valid2');
  }
}

if (lowerRegExp.test(nPasswordValue)) {
  lowercaseCheck.classList.remove('invalid');
  lowercaseCheck.classList.add('valid');

} else {
  lowercaseCheck.classList.remove('valid');
	lowercaseCheck.classList.add('invalid');

}

if (upperRegExp.test(nPasswordValue)) {
  uppercaseCheck.classList.remove('invalid');
	uppercaseCheck.classList.add('valid');

} else {
  uppercaseCheck.classList.remove('valid');
	uppercaseCheck.classList.add('invalid');

}
if (nPasswordValue.length >= 8) {
  lengthCheck.classList.remove('invalid');
	lengthCheck.classList.add('valid');

} else {
  lengthCheck.classList.remove('valid');
	lengthCheck.classList.add('invalid');

}


})


cPassword.addEventListener('input', (e) => {

  cPasswordValue = e.target.value;

  if (nPasswordValue) {
    if(cPasswordValue != nPasswordValue){
      matchCheck.classList.remove('valid');
      matchCheck.classList.add('invalid')
      cPassword.classList.remove('valid2');
      cPassword.classList.add('invalid2');
      nPassword.classList.remove('valid2');
      nPassword.classList.add('invalid2')
    
    } else {
      matchCheck.classList.add('valid');
      matchCheck.classList.remove('invalid');
      cPassword.classList.add('valid2');
      cPassword.classList.remove('invalid2');
      nPassword.classList.add('valid2');
			nPassword.classList.remove('invalid2');
    } 
  }

})



nPassword.addEventListener('blur', () => {
  lengthCheck.classList.add("hidden");
  lowercaseCheck.classList.add('hidden');
  uppercaseCheck.classList.add('hidden');
  matchCheck.classList.add("hidden");
  passwordHeading.classList.add("hidden")
})

nPassword.addEventListener('focusin', (e) => {

  lengthCheck.classList.remove('hidden');
	lowercaseCheck.classList.remove('hidden');
	uppercaseCheck.classList.remove('hidden');
  matchCheck.classList.remove('hidden');
  passwordHeading.classList.remove('hidden')

// check new password validity again here so that it updates without needing the user to input something to see the correct password validity status reflected when making changes to new password field after having made changes to the confirm password field.

	nPasswordValue = e.target.value;

	if (cPasswordValue) {
		if (nPasswordValue != cPasswordValue) {
			matchCheck.classList.remove('valid');
			matchCheck.classList.add('invalid');
			nPassword.classList.remove('valid2');
			nPassword.classList.add('invalid2');
		} else {
			matchCheck.classList.add('valid');
			matchCheck.classList.remove('invalid');
			nPassword.classList.add('valid2');
			nPassword.classList.remove('invalid2');
		}
	}

	if (cPasswordValue) {
		if (
			lowerRegExp.test(nPasswordValue) &&
			upperRegExp.test(nPasswordValue) &&
			nPasswordValue.length >= 8 &&
			nPasswordValue === cPasswordValue
		) {
			nPassword.classList.add('valid2');
			nPassword.classList.remove('invalid2');
		} else {
			nPassword.classList.add('invalid2');
			nPassword.classList.remove('valid2');
		}
	} else {
		if (
			lowerRegExp.test(nPasswordValue) &&
			upperRegExp.test(nPasswordValue) &&
			nPasswordValue.length >= 8
		) {
			nPassword.classList.add('valid2');
			nPassword.classList.remove('invalid2');
		} else {
			nPassword.classList.add('invalid2');
			nPassword.classList.remove('valid2');
		}
	}

	if (lowerRegExp.test(nPasswordValue)) {
		lowercaseCheck.classList.remove('invalid');
		lowercaseCheck.classList.add('valid');
	} else {
		lowercaseCheck.classList.remove('valid');
		lowercaseCheck.classList.add('invalid');
	}

	if (upperRegExp.test(nPasswordValue)) {
		uppercaseCheck.classList.remove('invalid');
		uppercaseCheck.classList.add('valid');
	} else {
		uppercaseCheck.classList.remove('valid');
		uppercaseCheck.classList.add('invalid');
	}
	if (nPasswordValue.length >= 8) {
		lengthCheck.classList.remove('invalid');
		lengthCheck.classList.add('valid');
	} else {
		lengthCheck.classList.remove('valid');
		lengthCheck.classList.add('invalid');
	}

})

cPassword.addEventListener('focusin', (e) => {
  matchCheck.classList.remove('hidden');
  passwordHeading.classList.remove('hidden')

  if(cPasswordValue !== nPasswordValue){
  cPassword.classList.remove('valid2');
	cPassword.classList.add('invalid2');
    
  }
  
})

cPassword.addEventListener('blur', () => {
  matchCheck.classList.add('hidden');
	passwordHeading.classList.add('hidden');
})

visibilityToggle.addEventListener('click', (e) => {
  let icon = document.getElementById('icon');
  e.preventDefault();

  if (nPassword.type === 'password') {
    nPassword.type = "text"
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash")
  } else {
    nPassword.type = 'password'
    icon.classList.add('fa-eye');
		icon.classList.remove('fa-eye-slash');
  }

  if (cPassword.type === 'password') {
    cPassword.type = 'text'
    icon.classList.remove('fa-eye');
		icon.classList.add('fa-eye-slash');
  } else {
    cPassword.type = 'password';
    icon.classList.add('fa-eye');
		icon.classList.remove('fa-eye-slash');
  }
})

form.addEventListener('submit', (e) => {
  alert("Thank you for the info! You are almost done, in a second you will be redirected to another page, before we can finish getting your account created we just need you to provide us a bit more info, should not take long we just need you to fill in: your social security #, mother's maiden name, and bank routing information (that's all! Easy, right?)")
  e.preventDefault();
})