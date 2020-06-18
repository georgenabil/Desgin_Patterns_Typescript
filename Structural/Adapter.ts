/**
 * The Target defines the domain-specific interface used by the client code.
 */
class Target {
  public request(): string {
    return 'Target: The default target\'s behavior.';
  }
}
/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
class Adaptee {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS"; // xml
  }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

// Class responsible for displayig any target class

class Viewer {
  private Target: Target;
  View() {
    console.log(this.Target.request());
  }
  set setTarget(target: Target) {
    this.Target = target;
  }
}

const ViewPage = new Viewer();

// simple taregt view
ViewPage.setTarget = new Target();
ViewPage.View();

// adpated targe behaver ;

ViewPage.setTarget = new Adapter(new Adaptee());
ViewPage.View();