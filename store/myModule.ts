import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'myModule', stateFactory: true, namespaced: true })
export default class MyModule extends VuexModule {
  // State
  private count = 0

  // Getters
  get getCount() {
    return this.count
  }

  // Mutations
  @Mutation
  increment() {
    this.count++
  }
}
