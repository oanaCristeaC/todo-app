<template>
  <div>
    <section>
      <HeaderSection @input="getInput" />
      <MainSection :newTask="newTask" />
      <FooterSection />
    </section>
    <FooterInfo />
  </div>
</template>
<script>
import HeaderSection from "@/components/HeaderSection.vue";
import MainSection from "@/components/MainSection.vue";
import FooterInfo from "@/components/FooterInfo.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "home",
  components: {
    HeaderSection,
    MainSection,
    FooterInfo,
    FooterSection
  },
  data: function() {
    return {
      newTask: ""
    };
  },
  methods: {
    getInput: function(value) {
      this.newTask = value;
    }
  }
};
</script>
<style scoped></style>
