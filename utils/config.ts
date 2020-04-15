export const environments = {
  production: 'production',
  qa: 'qa',
  staging: 'staging',
  development: 'dev',
}

export const log = {
  colors: {
    error: 'brightRed',
    warn: 'brightYellow',
    info: 'brightCyan',
    verbose: 'brightWhite',
    debug: 'brightBlue',
    silly: 'brightMagenta',
  },
  filename: 'debug.log',
  // priority => 0: highest 7: lowest
  levels: {
    emergency: {
      value: 'emerg',
      priority: 0,
    },
    alert: {
      value: 'alert',
      priority: 1,
    },
    critical: {
      value: 'crit',
      priority: 2,
    },
    error: {
      value: 'error',
      priority: 3,
    },
    warning: {
      value: 'warning',
      priority: 4,
    },
    notice: {
      value: 'notice',
      priority: 5,
    },
    info: {
      value: 'info',
      priority: 6,
    },
    debug: {
      value: 'debug',
      priority: 7,
    },
  },
}
