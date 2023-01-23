// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix===[]){
        return []
    }
    if(matrix===undefined){
        return []
    }

    let new_matrix = []
    let count = 0
    for (let i of matrix) {
        if (count % 2 === 0) {
            new_matrix = new_matrix.concat(i)
        } else {
            let rev_list = i.reverse()
            new_matrix = new_matrix.concat(rev_list)
        }

        count += 1
    }
    return new_matrix;
}
