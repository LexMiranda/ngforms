angularFormsApp.factory('efService',
    function() {
        return {
            employee: {
                fullName: "Lex Miranda",
                notes: "Preparação para entrevista",
                departament: "TI",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            }
        }
    });