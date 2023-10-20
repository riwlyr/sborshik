const FormFunc = () => {

    const form = document.querySelector("[role='search']")

    form.addEventListener("submit", e => {
        e.preventDefault()
        console.log(e);
        const input = e.srcElement[0];

        console.log(input?.value);
    })

}

export {FormFunc}