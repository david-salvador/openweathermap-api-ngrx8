interface IDictionary {
  add(key: string, value: any): void;
  remove(key: string): void;
  containsKey(key: string): boolean;
  keys(): string[];
  values(): any[];
}

class Dictionary {
  keys: string[] = [];
  values: any[] = [];

  constructor(init: { key: string; value: any }[]) {
    init.forEach((x: { key: string; value: any }) => {
      this[x.key] = x.value;
      this.keys.push(x.key);
      this.values.push(x.value);
    });
  }

  add(key: string, value: any) {
    this[key] = value;
    this.keys.push(key);
    this.values.push(value);
  }

  remove(key: string) {
    const index = this.keys.indexOf(key, 0);
    this.keys.splice(index, 1);
    this.values.splice(index, 1);

    delete this[key];
  }

  getKeys(): string[] {
    return this.keys;
  }

  getValues(): any[] {
    return this.values;
  }

  containsKey(key: string) {
    if (typeof this[key] === 'undefined') {
      return false;
    }

    return true;
  }

  toLookup(): Dictionary {
    return this;
  }
}
