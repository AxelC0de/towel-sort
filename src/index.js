
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ((!matrix) || matrix.length === 0) {
        return [];
    }




    else if (matrix.length > 0) {


        for (let i = 0; i < matrix.length; i++) {

            if (i % 2 !== 0) {
                matrix[i].sort(function (a, b) {
                    return b - a;
                });
            }
        }


        matrix = matrix.toString().split(',').map((item) => {
            return Number(item)
        });



        return matrix;

    }
}
