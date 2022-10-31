<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "8886 Obrero St., Barangay Olympia, Makati City, 1207",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "john.robert.s.ferrer@gmail.com",
          icon: "mail",
        },
        {
          id: 3,
          name: "+63905 854 9984",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
