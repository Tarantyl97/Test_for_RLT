const btnDelete = document.querySelector(".btn-j");
const infoSection = document.querySelector(".section4");
const btnX = document.querySelector(".closeModal__section4-position");
let btnDeleteHiden = document.getElementById("btn-j");
let line = document.getElementById("line");
let lastP = document.getElementById("section4__p");
let sectionTable = document.querySelector(".section2__container");

let things = [
            
    obj1 = {
        name: "square",
        color: "green",
        amount: 4
    },

    obj2 = {
        name: "square",
        color: "red",
        amount: 2
    },

    obj3 = {
        name: "square",
        color: "purple",
        amount: 5
    }
];

function pageLoaded() {
    btnDelete.addEventListener("click", changeBtn);

    function changeBtn() {
        let buttonCancel = `<button id="btn__cancel" class="btn btn__cancel">Отмена</button>`;
        let buttonSubmit = `<button id="btn__submit" class="btn btn__submit">Подтвердить</button>`;
        let input = `<input id="input__value" class="input__value" type="number" placeholder="Введите количество"></input>`;
        
        btnDeleteHiden.className = "hide";
        line.className = "hide";
        lastP.className = "hide";

        let buttonCanselStyle = $(buttonCancel);
        buttonCanselStyle.css ({
            background: "#FFFFFF",
        });

        $("body").append(buttonCanselStyle);

        let buttonSubmitStyle = $(buttonSubmit);
        buttonSubmitStyle.css ({
            background: "#FA7272"
        });

        $("body").append(buttonSubmitStyle)

        let inputStyle = $(input)
        inputStyle.css ({
            background: "#262626",
            color: "white"
        });

        $("body").append(inputStyle)

        document.getElementById("btn__cancel").onclick = function() {
            document.getElementById("btn__cancel").remove();
            document.getElementById("btn__submit").remove();
            document.getElementById("input__value").remove();
    
            btnDeleteHiden.className = "btn";
            line.className = "line";
            lastP.className = "section4__p section1__p";
        }
    };
    
    btnX.addEventListener("click", () => {
        infoSection.className = "hide";
        // document.getElementById("btn__cancel").remove();
        // document.getElementById("btn__submit").remove();
        // document.getElementById("input__value").remove();
        // какой то обработчик клика на предмет, класснейм вернуть свой чтобы было видно  if()
    });
    // if(sectionTable) {
    //     infoSection.className = "section4" //display block
    // }

    sectionTable.addEventListener('click', () => {

        infoSection.className = "section4"
        // things.innerHTML +=`<div class="section2__container n${index}"></div>`;
        // sectionTable.innerHTML += things().join;
        // sectionTable.querySelectorAll(".section2__container").forEach(things => {

    });

    sectionTable.ondragstart = () => false;
    const getCoords = (elem) => {
    const box = elem.getBoundingClientRect();
        return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
  };
    }

    sectionTable.addEventListener('mousedown', (e) => {
      const coords = getCoords(sectionTable);
      const shiftX = e.pageX - coords.left;
      const shiftY = e.pageY - coords.top;

      const coordsPaste = getCoords(sectionTable);

      const shiftX1 = e.pageX - coords.left;
      // console.log('shiftX', shiftX);
      const shiftY2 = e.pageY - coords.top;
      // console.log('shiftY', shiftY);

      const moveAt = (e) => {
        sectionTable.style.left = e.pageX - shiftX + 'px';
        sectionTable.style.top = e.pageY - shiftY + 'px';
      }
      // Создаем функцию для удаления всех обработчиков
      const theEnd = () => {
        document.removeEventListener('mousemove', moveAt);
        document.removeEventListener('mouseup', theEnd);
        sectionTable.style.position = 'absolute';
      }

      sectionTable.style.position = 'absolute';
      moveAt(e);
      sectionTable.style.zIndex = 1000;

      document.addEventListener('mousemove', moveAt);
      document.addEventListener('mouseup', theEnd);
    });

}

document.addEventListener("DOMContentLoaded", pageLoaded);