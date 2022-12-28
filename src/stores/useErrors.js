import { defineStore } from 'pinia';

export const useErrorsStore = defineStore('errors', {
  state: () => ({
    message: null,
    code: null,
  }),

  actions: {
    throwError(errorInput) {
      if (errorInput) {
        this.message = errorInput.msg;
        this.code = errorInput.code;

        setTimeout(() => {
          this.message = null;
          this.code = null;
        }, 5000);
      }
    },
  },
});
