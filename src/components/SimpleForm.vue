<script setup>
import BaseInput from "./formFields/BaseInput.vue";
import BaseSelect from "./formFields/BaseSelect.vue";
import BaseCheckbox from "./formFields/BaseCheckbox.vue";
import BaseRadioGroup from "./formFields/BaseRadioGroup.vue";

import { reactive } from "vue";
import axios from "axios";

const categories = reactive([
  "sustainability",
  "nature",
  "animal welfare",
  "housing",
  "education",
  "food",
  "community",
]);

const event = {
  category: "",
  title: "",
  description: "",
  location: "",
  pets: 1,
  extras: {
    catering: false,
    music: false,
  },
};

const petOptions = [
  { label: "Yes", value: 1 },
  { label: "No", value: 0 },
];

async function sendForm() {
  try {
    console.log("Event: ", event);
    // const res = axios.post("api-url", event);
  } catch (error) {
    console.log("Error: ", error);
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p>event.category: {{ event.category }}</p>
      </div>
      <div class="col">
        <h1>Create an event</h1>
        <form @submit.prevent="sendForm">
          <BaseSelect
            v-model="event.category"
            label="Select a category"
            :options="categories"
            class="form-control"
          />

          <h3>Name & describe your event</h3>

          <BaseInput
            v-model="event.title"
            label="Title"
            type="text"
            class="form-control"
          />
          <BaseInput
            v-model="event.description"
            label="Description"
            type="text"
            class="form-control"
          />

          <h3>Where is your event?</h3>
          <BaseInput
            v-model="event.location"
            label="Location"
            type="text"
            class="form-control"
          />

          <h3>Are pets allowed?</h3>
          <div>
            <BaseRadioGroup
              v-model="event.pets"
              name="pets"
              :options="petOptions"
            />
          </div>

          <h3>Extras</h3>
          <div>
            <BaseCheckbox label="Catering" v-model="event.extras.catering" />
          </div>

          <div>
            <BaseCheckbox label="Live music" v-model="event.extras.music" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
