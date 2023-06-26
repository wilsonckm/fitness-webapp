const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: {type: String, 
        require: true
    },
    muscle: {type: String,
        enum: ['Abdominals', 'Abductors', 'Adductors', 'Biceps', 'Calves', 'Chest', 'Forearms', 'Glutes', 'Hamstrings', 'Lats', 'Lower Back', 'Middle Back', 'Neck', 'Quads', 'Traps', 'Triceps','abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle back', 'neck', 'quads', 'traps', 'triceps' ],
        require: true
    },
    sets: {type: Number,
        min: 0,
        required: false,
    },
    reps: {type: Number,
        min: 0,
        required: false,
    },
    complete: {type: Boolean, 
        default: false,
        require: false
    },
    lbs: {type: Number,
        min: 0,
        required: false,
    },
}, {
    timestamps:true
});

module.exports= mongoose.model('Exercise', exerciseSchema);