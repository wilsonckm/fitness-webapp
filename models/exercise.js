const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: {type: String, 
        require: true
    },
    type: {type: String,
        enum: ['Abdominals', 'Abductors', 'Adductors', 'Biceps', 'Calves', 'Chest', 'Forearms', 'Glutes', 'Hamstrings', 'Lats', 'Lower Back', 'Middle Back', 'Neck', 'Quads', 'Traps', 'Triceps' ],
        require: true
    },
    sets: {type: Number,
        min: 0,
        required: true,
    },
    reps: {type: Number,
        min: 0,
        required: true,
    },
    complete: {type: Boolean, 
        default: false,
        require: true
    },
    lbs: {type: Number,
        min: 0,
        required: true,
    },
}, {
    timestamps:true
});

module.exports= mongoose.model('Exercise', exerciseSchema);