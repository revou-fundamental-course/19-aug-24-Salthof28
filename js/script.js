let indexSlide = 1;
showslide(1);


function nextSlide(n) {
    showslide(indexSlide += n);
    
}


function showslide(n) {
    let listImage = document.getElementsByClassName('MainArticle_Banner_Content');
    console.log(listImage);

    if (n > listImage.length) {
        indexSlide = 1;
    }

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    
}

setInterval(() => nextSlide(1), 3000);



let username = document.querySelector('#input-name')

let date = document.querySelector('#input-Date')

var gender = document.getElementsByName('input_gender');

let pesan = document.querySelector('#input-Pesan')

const submitBtn = document.querySelector('.Button_style')
const commentsCont = document.querySelector('.comment_container')

submitBtn.addEventListener('click', submitFeedback);

feedbackArr = [];

function submitFeedback(e) {

    
    
    const namevalue = username.value;
    const datevalue = date.value;
    

    var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
    var formattedString = dateString.replace(", ", " - ");

    const pesanvalue = pesan.value;

    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked){
            gendervalue = gender[i].value;
        }
    }

    if (namevalue =='' || datevalue == '' || gendervalue == '' || pesanvalue == '') {
        alert('Maaf Proses input tidak dapat diproses karena ada inputan yang kosong');
    }
    else {
        alert ('Proses Input Data Behasil');
        document.getElementById('name').innerHTML = namevalue;



        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "names": namevalue,
            "dates": datevalue,
            "genders": gendervalue,
            "clock": formattedString,
            "pesans":pesanvalue
        }

        feedbackArr.push(newFeedback);

        
        addFeedback(newFeedback);

    }
    e.preventDefault()

}




function addFeedback(item){
    const letter = (item.names).charAt(0);
    const div = document.createElement('div');
    div.classList = 'comment_card';
    div.id = item.id;
    div.innerHTML = `
    <div class = "pic center_display">
                        ${letter}
                    </div>
                    <div class="comment_info">
                        <small class="names">
                            Nama: ${item.names}
                        </small>
                        <samall class="date">
                            Tanggal Lahir: ${item.dates}
                        </samall>
                        <small class="gender">
                            Jenis Kelamin: ${item.genders}
                        </small>
                        <small class="clock">
                            Current Time: ${item.clock}
                        </small>
                        <p class="comment">
                            
                        </p>
                    </div>
    `;
    // insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend', div);

}