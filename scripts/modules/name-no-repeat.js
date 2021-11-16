export function noRepeatName(name, list) {
    let checkName = list.find(element => element == name)
        if (checkName != null) {
                alert("Ese nombre ya está incluido")
                return true
        }
        return false
}