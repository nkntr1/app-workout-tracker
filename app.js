const form = document.getElementById("seance-form");
const submitBtn = document.getElementById("submit-button");
let seances = []


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const seance={
        exercice:document.getElementById("workout-name").value,
        poids:Number(document.getElementById("weight").value),
        series:Number(document.getElementById("series-count").value),
        repetitions:Number(document.getElementById("repetitions-count").value),
        date:new Date().toLocaleDateString()
    };
    seances.push(seance);
    console.log(seances);

    form.reset();

    const texteInitial = submitBtn.textContent;
    submitBtn.textContent ="Séance créée !";
    submitBtn.disabled=true;

    setTimeout(()=>{
        submitBtn.textContent = texteInitial;
        submitBtn.disabled = false;

    },1000);
});