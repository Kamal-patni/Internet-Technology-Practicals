window.onload = function () {
    const onClickHandler = function (e) {
        e.preventDefault();
        const state = {};
        const v = Array.from(document.querySelectorAll(".input"));
        v.forEach((value) => {
            state[value.id] = value.value;
        });
        if (
            state.name == "" ||
            state.age == "" ||
            state.weight == "" ||
            state.type == "select" ||
            state.likes == ""
        ) {
            alert("Input field can't be empty");
            return;
        }
        console.log(state);
        const options = {
            method: "POST",
            body: JSON.stringify(state),
        };

        fetch("http://localhost:5000/api/add", options)
            .then((response) => response.json())
            .then((response) => {
                document.querySelector(".pet-form").style.transform =
                    "translateX(-100%)";
                document.querySelector(".pet-view-form").style.transform =
                    "translateX(-100%)";
                execute();
            })
            .catch((err) => console.error(err));
    };
    const resetHandler = function (e) {
        // location.reload();
    };
    document
        .getElementsByTagName("button")[0]
        .addEventListener("click", onClickHandler);
    document
        .getElementsByTagName("button")[1]
        .addEventListener("click", resetHandler);
    document.querySelector(".btn3").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".pet-form").style.transform =
            "translateX(-100%)";
        document.querySelector(".pet-view-form").style.transform =
            "translateX(-100%)";
        execute();
    });
    document.querySelector(".btn6").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".pet-form").style.transform = "translateX(0%)";
        document.querySelector(".pet-view-form").style.transform =
            "translateX(0%)";
    });
    function getPetCard({ name, age, weight, type }) {
        return `<div class="pet-card">
            <div class="pname cd">
                <div class="key">Name</div>
                <div class="value">${name}</div>
            </div>
            <div class="page cd">
                <div class="key">Age</div>
                <div class="value">${age} year old</div>
            </div>
            <div class="pweight cd">
                <div class="key">Weight</div>
                <div class="value">${weight} kg</div>
            </div>
            <div class="ptype cd">
                <div class="key">Pet type</div>
                <div class="value">${type}</div>
            </div>
        </div>`;
    }
    //-------------------------------------------
    async function execute(params) {
        const options = {
            method: "GET",
        };
        fetch("http://localhost:5000/api/pets", options)
            .then(response=> response.json())
            .then((res) => {
                // console.log(res);
                let response = JSON.parse(res);
                // console.log(response);
                let s = "";
                response.forEach((obj) => {
                    s += getPetCard(obj);
                });
                document.querySelector(".group-card").innerHTML = s;
            })
            .catch((err) => console.error(err));
    }
    execute();
    //-------------------------------------------
};
