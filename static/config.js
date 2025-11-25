const defaultConfig = {
  MaxFileSize: 300 * 1024 * 1024,
  LoginWithEmail: false,
  AllowWorkspaces: true,
  LoginViewName: 'service-manager',
  AllowRegistration: true,
  GridDefaultRows: 100,
  GridVJDefaultRows: 25,
  GridSimpleViewHeight: 364,
  GridVJViewHeight: 488,
  GridEntityViewHeight: 655,
  GridReportViewHeight: 818,
  BaseUrl: '/login',

  passwordVisability: 'toggle',

  isShowChat: true,

  BtnTextColor: '#fafafa',
  BtnBgColor: '#ff7b3b',
  BtnBorderColor: 'transparent',

  LogoText: 'ITSM OOB',
  PartnerLogo: '/img/ip_servicemanager_logo.svg',
  Department: 'Demo',
  AllowServiceSubscription: true,
  AllowGlobalSearch: true
}

const ipSmConfig = {
  LogoText: 'IP Service Manager',
  LoginContainerTitle: 'ITSM OOB',
  Department: 'Demo',
  BackgroundImage: 'static/img/cdim_login.png'
}

window.ipSaasConfig = Object.assign(defaultConfig, ipSmConfig);
