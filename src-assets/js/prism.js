import Prism from 'prismjs';
// import 'prismjs/plugins/autoloader/prism-autoloader'

// Prism.plugins.autoloader.languages_path = '/prismjs/components/';
// import 'prismjs/components/prism-bash' 
// import 'clipboard'
import loadLanguages from 'prismjs/components/'
// import 'prismjs/plugins/toolbar/prism-toolbar'
// import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

loadLanguages(['bash'])

Prism.highlightAll()
