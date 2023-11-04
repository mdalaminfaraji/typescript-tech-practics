{
  const poorUser = {
    name: "alamin",
    balance: 0,
    addBalance(balance: number): string {
      return `my balance ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 2, 3];
  const newArray: number[] = arr.map((elem: number): number => elem * elem);
  console.log(newArray);
}
