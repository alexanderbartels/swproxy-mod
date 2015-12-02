/**
 * The Proxy for service workers
 */
class SwProxyMod {

  /**
   * @return {String} Name from the Method, that will be added to the swproxy global Namespace.
   *                  THis Methed will then called by the developer to create new rules
   */
  static factoryMethodName() {

  }

  /**
   *
   * @param swproxy the swproxy instance. Install, activate and fetch rules can be added to it
   * @returns {Function} the function that will be added to the global Namespace, to create rules.
     */
  /*eslint-disable no-unused-vars */
  static factoryMethod(swproxy) {
    return (rule1, rule2, rule3, rule4, ...args) => {
      // implement rule creation
    };
  }
  /*eslint-enable*/
}

class SwProxyModRule {

  mergeModifierInto(event) {
    // TODO implement me.
    // copy this.modifier into the given event

    return event;
  }
}

export {
  SwProxyMod,
  SwProxyModRule
};
