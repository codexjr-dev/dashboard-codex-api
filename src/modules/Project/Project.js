const { Schema, model } = require("mongoose");
const Ej = require("@ej/Ej");
const Member = require("@member/Member");
const News = require("@news/News");

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
        enum: [
          "Backend",
          "Frontend",
          "Mobile",
          "Wordpress",
          "Assessoria",
          "Treinamento",
        ],
        required: false,
      },
    ],
    ej: {
      type: Schema.Types.ObjectId,
      ref: Ej,
      required: true,
    },
    team: [
      {
        type: Schema.Types.ObjectId,
        ref: Member,
        required: false,
      },
    ],
    startDate: {
      type: Date,
      required: true,
    },
    finishDate: {
      type: Date,
      required: false,
    },
    contractLink: {
      type: String,
      required: false,
    },
    customer: {
      email: {
        type: String,
        required: false,
      },
      contact: {
        type: String,
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
    },
    news: [
      {
        type: Schema.Types.ObjectId,
        ref: 'News',
        required: false,
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Project", ProjectSchema);
