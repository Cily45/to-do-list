export class Todo{
  isChecked: boolean = false;
  constructor(
    public value: string,
  ) {}

  checked(): void{
    this.isChecked = !this.isChecked;
  }
}
