import Swal from "sweetalert2";

const getLocalStorageData = () => {
    const getLocalData = localStorage.getItem("cart-item-id");

    if(getLocalData) {
        return JSON.parse(getLocalData);
    }

    return [];
}

const setLocalStorageData = (id) => {
    const previousData = getLocalStorageData();

    const isExist = previousData.find((item) => id === item)

    if(isExist) {
        Swal.fire({
            icon: 'error',
            title: "Already added this item!!",
            text: 'Something went wrong!',
        })
        return;
    }

    previousData.push(id);

    localStorage.setItem("cart-item-id", JSON.stringify(previousData));

    Swal.fire(
        'Successfully added!',
        'You clicked the button!',
        'success'
    )
}

export {getLocalStorageData, setLocalStorageData};