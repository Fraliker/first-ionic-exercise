export class SettingsService {
  private changeBackground = false;

  setBackground(isChanged: boolean) {
    this.changeBackground = isChanged;
  }

  isBackgroundChanged() {
    return this.changeBackground;
  }


}
