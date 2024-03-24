/* NAVIGATION SERVICE */

class Navigation_service {
  // эндпойнты для навигации
  static #ENDPOINTS = {
    BASE_URL: "navigation",
  };

  // получить список секций навигации
  static async getNavigationList() {
    const response = (
      await fetch(`${import.meta.env.VITE_SERVER_URL}/${this.#ENDPOINTS.BASE_URL}`, {
        method: "GET",
      })
    ).json();

    return response;
  }
}

export default Navigation_service;
