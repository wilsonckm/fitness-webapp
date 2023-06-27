const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: {type: String, 
        require: true
    },
    muscle: {type: String,
        enum: ['Abdominals', 'Abductors', 'Adductors', 'Biceps', 'Calves', 'Chest', 'Forearms', 'Glutes', 'Hamstrings', 'Lats', 'Lower back', 'Middle back', 'Neck', 'Quadriceps', 'Traps', 'Triceps','abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle back', 'neck', 'quadriceps', 'traps', 'triceps' ],
        require: true
    },
    sets: {type: Number,
        min: 0,
    },
    reps: {type: Number,
        min: 0,
    },
    complete: {type: Boolean, 
        default: false,
    },
    lbs: {type: Number,
        min: 0,
    },
}, {
    timestamps:true
});

module.exports= mongoose.model('Exercise', exerciseSchema);