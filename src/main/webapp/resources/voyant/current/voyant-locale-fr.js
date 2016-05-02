Ext.apply(Voyant.widget.DownloadFilenameBuilder.i18n, {
"titleLabel":"title",
"authorLabel":"author",
"availableLabel":"exclude: ",
"enabledLabel":"include: ",
"fieldLabel":"Filenames",
"pubDateLabel":"date"});
Ext.apply(Voyant.panel.DocumentTerms.i18n, {
"matchingTerms":"Matching terms: {count}",
"tfidfTip":"The significance is measured here using an TF-IDF score, a common way of expressing how important a term is in a document relative to the rest of the corpus.",
"rawFreqTip":"The count (raw frequency) of this term in this document.",
"emptyText":"No matching results.",
"relativeFreqTip":"The relative frequency (per million) of this term in each document.",
"termTip":"The term in a single, specific document.",
"zscore":"Z-Score",
"trendTip":"This is a sparkline graph that represents the distribution of the term within linear segments of the document (by default 10 segments of equal size).",
"tfidf":"Significance",
"title":"Document Terms",
"helpTip":"<p>Document Terms is a table view of terms that appear in each document. Features include:</p><ul><li>reordering by <i>Term</i>, <i>Count</i> (raw frequency), and <i>Relative</i> frequency (click on the column headers)</li><li>a sparkline graph of the distribution of term frequencies across the documents</li><li>additional columns available (<i>Significance</i> or TF-IDF) by clicking on the arrow that appears when hovering over a header</li><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>",
"zscoreTip":"The Z-Score, or standard score, is a normalized value for the term's raw frequency compared to other term frequencies in the same document.<table><tbody><tr><td style=\"text-align: center; font-size: smaller; font-family: mono;\">frequency of term - mean of term frequencies<hr>standard deviation of term frequencies</td></tr></tbody></table>."});
Ext.apply(Voyant.panel.VoyantHeader.i18n, {
"homeConfirm":"Are you sure you want to start over (and leave the current corpus)?",
"title":"Voyant Tools",
"helpTip":"Voyant Tools is a web-based reading and analysis environment for digital texts.",
"homeTip":"Click to start over from the corpus creation screen.",
"home":"Start Over"});
Ext.apply(Voyant.data.model.Corpus.i18n, {
"hasNdocuments":"has {count} documents",
"daysAgo":"about {count} days ago",
"monthsAgo":"about {count} months ago",
"thisCorpus":"This corpus",
"isEmpty":"is empty",
"widthNwordsAndNTypes":"with {words} <span class=\"info-tip\" data-qtip=\"every occurrence of every word (like multiple occurrences of &quot;the&quot;) is counted\">total words</span> and {types} <span class=\"info-tip\" data-qtip=\"multiple occurrences of words (like &quot;the&quot;) are counted once\">unique word forms</span>",
"hoursAgo":"about {count} hours ago",
"minutesAgo":"about {count} minutes ago",
"minuteAgo":"about a minute ago",
"monthAgo":"about a month ago",
"hourAgo":"about an hour ago",
"failedCreateCorpus":"Failed attempt to create a Corpus.",
"has1document":"has 1 document",
"yearsAgo":"about {count} years ago",
"secondAgo":"about a second ago",
"now":"now",
"yearAgo":"about a year ago",
"secondsAgo":"{count} seconds ago",
"dayAgo":"about a day ago"});
Ext.apply(Voyant.panel.Cirrus.i18n, {
"maxTerms":"Max terms",
"visible":"Show",
"options":"Options",
"title":"Cirrus",
"helpTip":"</p><p>Cirrus provides a wordcloud view of the most frequently occurring words in the corpus or document –&nbsp;this provides a convenient (though reductive) overview of the content. Features include</p><ul><li>term frequency appears when hovering over words</li><li>clicking on terms may produce results in other tools if any are displayed</li></ul>",
"visibleTerms":"Terms"});
Ext.apply(Voyant.panel.DocumentsFinder.i18n, {
"emptyQuery":"type query here",
"queryMatches":"A total of {0} matching documents (out of {1}).",
"titleField":"title",
"emptyText":"No matching results.",
"query":"Query",
"count":"Count",
"exportNewCorpus":"New Corpus",
"title":"Documents Finder",
"loading":"loading corpus",
"addRow":"Add Row",
"operator":"Operator",
"textField":"text (default)",
"unsuccessfulQuery":"Unable to complete query.",
"pubPlaceField":"publication location",
"advancedField":"<i>advanced query</i>",
"authorField":"author",
"noMatches":"No matches (out of {0} documents).",
"field":"Field",
"deleteRowTip":"Click to delete this row",
"publisherField":"publisher",
"pubDateField":"publication date",
"exportNewCorpusTip":"Create a new corpus from matching documents (button will be disabled if there are no matches)."});
Ext.apply(Voyant.panel.WordTree.i18n, {
"emptyText":"No matching results.",
"title":"WordTree"});
Ext.apply(Voyant.widget.DownloadFileFormat.i18n, {
"original":"original",
"VOYANTTip":"This is a normalized version of the content: when the source documents are in XML, this will be mostly the original content, and for most other source document formats this will be simple HTML content.",
"fieldLabel":"File Format",
"voyantXml":"Voyant XML",
"plainText":"plain text",
"SOURCETip":"This will attempt to provide the source documents in their original formats. In some cases this means that a single archive (such as a ZIP file) might be provided.",
"TXTTip":"This will produce a plain text version of each document."});
Ext.apply(Voyant.panel.ScatterSet.i18n, {
"title":"Scatter",
"helpTip":"This is a specialized view for working with scatterplots."});
Ext.apply(Voyant.panel.TermsRadio.i18n, {
"displayPanelTip":"Panel to control settings for word display.",
"linear":"Linear",
"log":"Logarithmic",
"displayPanel":"Display Panel",
"completingTransition":"Completing transition.",
"removeTerm":"Remove <b>{0}</b>",
"yScale":"Y-axis Scale",
"title":"TermsRadio",
"type":"Visualization",
"speed":"Speed",
"segments":"Segments",
"fraction":"Word Display",
"duration":"Speed",
"help":"This tool can be used to examine word occurence over a corpus spanning a period of time.",
"resetTip":"Reset the visualization to the beginning.",
"terms":"Terms",
"visibleSegments":"Visible",
"visibleSegmentsTip":"This option determines how many of the documents/segments are displayed at once.",
"reset":"Reset",
"segmentsTip":"This option allows you to define how many segments a document should be divided into (note that this option only applies to distribution within a document, not distribution across a corpus).",
"termNotFound":"Term not found.",
"fractionTip":"This option allows you to define the number of words displayed. Ex. 20 will only keep the words that occur with the lowest 20% of frequency."});
Ext.apply(Voyant.util.Toolable.i18n, {
"exportTitle":"Export",
"exportError":"Export Error",
"exportDataTsvMessage":"Copy data below, they can be pasted into a spreadsheet or text file.",
"exportViewFieldset":"Export View (Tools and Data)",
"exportSvgMessage":"<p>This is a thumbnail of the SVG image, right-click or ctrl-click on the image to save a full-size copy on your hard drive.</p><p>Alternatively, copy the SVG code below.</p>",
"exportDataJsonMessage":"Copy the data below, they can be used in other web-based applications.",
"plusTip":"Click to choose another tool for this panel location (this will replace the current tool).",
"gearTip":"Define options for this tool.",
"cancelTitle":"Cancel",
"exportViewHtmlEmbed":"an HTML snippet for embedding this view in another web page",
"exportGridCurrent":"Export Current Data",
"exportSvgTitle":"Export SVG",
"maximizeTip":"Ouvrir cet outil dans une autre fenêtre.",
"exportGridCurrentTsv":"export current data as tab separated values (text)",
"exportVizTitle":"Export Visualization",
"exportDataTitle":"Export Data",
"optionsTitle":"Options",
"exportBiblioTitle":"Export Bibliographic Reference",
"confirmTitle":"Confirm",
"moreHelp":"More help…",
"exportViewUrl":"a URL for this view (tools and data)",
"helpTip":"No tool-specific help is currently available. Click this icon to visit the <a href=\"http://docs.voyant-tools.org/\" target=\"_blank\">Voyant Tools Documentation</a> site.",
"export":"Export",
"exportDataHtmlMessage":"Copy the data below, they can be pasted into an HTML page or used as XML.",
"exportPngTitle":"Export PNG",
"exportPngMessage":"<p>This is a thumbnail of the PNG image, right-click or ctrl-click on the image to save a full-size copy on your hard drive.</p><p>Alternatively, copy the HTML code below.</p>",
"exportGridCurrentHtml":"export current data as HTML",
"exportViewEmbedMessage":"You can copy and paste the HTML snippet from the box below into another web page. Note that some content management systems (like WordPress) may need a special plugin to handle &lt;iframe&gt; tags.",
"exportPng":"export a PNG image of this visualization",
"reset":"Reset",
"exportViewBiblio":"a bibliographic reference for this view",
"exportViewEmbedTitle":"Embed HTML Snippet",
"exportNoFunction":"An export function has been defined by is not availble.",
"exportGridCurrentJson":"export current data as JSON",
"exportSvg":"export the SVG of this visualization",
"saveTip":"Export a URL, an embeddable tool, data or a bibliographic reference."});
Ext.apply(Voyant.util.Downloadable.i18n, {
"exportTitle":"Export",
"downloadButton":"Download",
"cancelButton":"Cancel"});
Ext.apply(Voyant.panel.StreamGraph.i18n, {
"freqsMode":"Frequencies",
"freqsModeTip":"Determines if frequencies are expressed as raw counts or as relative counts (per document or segment).",
"relativeFrequencies":"Relative Frequencies",
"documents":"Documents",
"documentSegments":"Document Segments",
"clearTerms":"Clear Terms",
"title":"StreamGraph",
"rawFrequencies":"Raw Frequencies",
"helpTip":"StreamGraph is a visualization that depicts the change of the frequency of words in a corpus (or within a single document).",
"segments":"Segments"});
Ext.apply(Voyant.panel.CorpusCollocates.i18n, {
"contextTermRawFreq":"Count (context)",
"matchingTerms":"{count}",
"contextTerm":"Collocate",
"emptyText":"No matching results.",
"termTip":"This is the keyword term around which collocate (context) terms are counted.",
"termRawFreqTip":"The number of times the keyword term occurs in the corpus.",
"title":"Collocates",
"termRawFreq":"Count (keyword)",
"context":"context",
"term":"Term",
"helpTip":"<p>Corpus Collocates is a table view of which terms appear more frequently in proximity to keywords across the entire corpus. Features include:</p><ul><li>reordering by keyword, collocate word, collocate word count</li><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>",
"contextTermRawFreqTip":"The number of times this collocate occurs near the keyword term in the corpus.",
"contextTermTip":"This is the collocate (context) term that occurs near the keyword term."});
Ext.apply(Voyant.panel.Documents.i18n, {
"keepTip":"Click here to create a new corpus that only includes selected or filtered (search query) documents.",
"reorderFilteredError":"You cannot reorder a filtered (after search query) corpus. Please create a new corpus first (with the <i>Remove</i> or <i>Keep</i> button) and then reorder the new corpus.",
"typesCountLexical":"Types",
"emptyText":"No matching results.",
"removeFilteredDocuments":"Create a <i>new</i> corpus that removes (does NOT include) the {0:plural('filtered document')}?",
"language":"Language",
"reorder":"Reorder",
"removeSelectedDocuments":"Create a <i>new</i> corpus that removes (does NOT include) the {0:plural('selected document')}?",
"title":"Documents",
"error":"Error",
"addTip":"Click here to add new documents to this corpus.",
"keepFilteredDocuments":"Create a <i>new</i> corpus that only keeps the {0:plural('filtered document')}?",
"remove":"Remove",
"documentAuthor":"Author",
"selectOrFilterError":"You need to first select documents by clicking on one or more rows or by performing a search query.",
"keepSelectedDocuments":"Create a <i>new</i> corpus that only keeps the {0:plural('selected document')}?",
"tokensCountLexical":"Words",
"removeTip":"Click here to create a new corpus that excludes selected or filtered (search query) documents.        ",
"matchingDocuments":"Matching documents: {count}",
"id":"ID",
"documentTitle":"Title",
"helpTip":"<p>Documents is a table view of the documents in the corpus. Features include:</p><ul><li>reordering by <i>Title</i>, <i>Words</i> count (tokens), word forms count (<i>Types</i>), and <i>Ratio</i> (Types/Tokens Ratio) (click on the column headers)</li><li>a search box for queries (by default in the full-text, title and author fields —&nbsp;hover over the magnifying icon for help with the syntax)</li></ul>",
"add":"Add",
"newCorpus":"New Corpus",
"allSelectedError":"You have selected all documents, you must select a subset of documents to remove or keep.",
"reorderTip":"Click here to create a new corpus based on a reordering of documents (drag and drop rows to reorder).",
"onlyOneError":"Your corpus has only one document, you can't remove or keep documents to create a new corpus.",
"modify":"Modify",
"typeTokenRatioLexical":"Ratio",
"modifyTip":"Click this button to create a new corpus by adding new documents, by selecting a subset of documents or by re-ordering documents.",
"reorderDocuments":"Create a <i>new</i> corpus based on the order shown?",
"keep":"Keep",
"reorderOriginalError":"Please reorder the corpus first (drag and drop the rows in the table)."});
Ext.apply(Voyant.panel.Panel.i18n, {
"trend":"Trend",
"relativeFreq":"Relative",
"colon":": ",
"term":"Term",
"rawFreq":"Count",
"loading":"Loading",
"error":"Error",
"info":"Information"});
Ext.apply(Voyant.widget.CorpusDocumentSelector.i18n, {
"corpus":"Corpus",
"scale":"Scale"});
Ext.apply(Voyant.widget.DownloadOptions.i18n, {
"title":"Download Options"});
Ext.apply(Voyant.widget.TotalPropertyStatus.i18n, {
"totalPropertyStatus":"{count:number(\"0,000\")}"});
Ext.apply(Voyant.panel.Phrases.i18n, {
"overlapNone":"none (keep all)",
"overlapTip":"This determines how overlapping phrases are filtered.",
"matchingTerms":"{count}",
"overlapFreq":"prioritize most frequent phrases",
"emptyText":"No matching results.",
"length":"Length",
"termTip":"This is the keyword phrase (this is a generalized form, it may appear slightly differently for each occurrence).",
"termRawFreqTip":"The number of times the phrase occurs in the corpus.",
"title":"Phrases",
"lengthTip":"The upper and lower bounds of phrase lengths (how many words in each phrase).",
"termRawFreq":"Count",
"overlap":"Overlap",
"overlapLength":"prioritize longest phrases",
"overlapMenu":"Choose an overlap filter:",
"term":"Term",
"helpTip":"<p>Corpus Phrases is a table view of repeating phrases in the entire corpus.<!-- Features include:</p><ul><li>reordering by keyword, collocate word, collocate word count</li><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>-->"});
Ext.apply(Voyant.panel.Trends.i18n, {
"freqsMode":"Frequencies",
"freqsModeTip":"Determines if frequencies are expressed as raw counts or as relative counts (per document or segment).",
"relativeFrequencies":"Relative Frequencies",
"documents":"Documents",
"options":"Options",
"raw":"Raw",
"segmentsSlider":"Segments",
"title":"Trends",
"rawFrequencies":"Raw Frequencies",
"helpTip":"<p><i>Trends</i> shows a line graph of the relative frequencies across the corpus (for multiple documents) or within a document. Features include</p><ul><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>",
"relative":"Relative",
"segments":"Document Segments"});
Ext.apply(Voyant.panel.Reader.i18n, {
"documentFrequency":"document frequency:",
"limitedAccess":"This is a limited access corpus and this tool's functionality is restricted.",
"title":"Reader",
"helpTip":"<p>The Reader tool provides a view of text from the corpus. Features include:</p><ul><li>frequency information appears when hovering over a word</li><li>distribution information appears in a graph at the bottom when clicking on a word</li><li>a bar graph at the bottom indicates the relative size of each document in the corpus</li><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>"});
Ext.apply(Voyant.VoyantCorpusApp.i18n, {
"fetchingCorpus":"Fetching your corpus",
"moreToolsTypeViz":"Visualization Tools",
"noPasswordGiven":"Please provide an access code.",
"passwordValidationError":"Sorry, an unexpected error occurred while trying to validate your access code.",
"passwordRequiredMessage":"This corpus requires an access code.",
"passwordRequiredTitle":"Access Code Required",
"password":"access code",
"moreToolsScaleDocument":"Document Tools",
"moreToolsTypeGrid":"Grid Tools",
"moreToolsType":"Tools by Type",
"moreToolsTypeOther":"Other Tools",
"nonConsumptiveButton":"Limited Access",
"moreToolsScaleCorpus":"Corpus Tools",
"nonConsumptiveMessage":"Alternatively, you can click on the <i>Limited Access</i> button to continue with limited functionality (generally speaking, this non-consumpive access allows you to explore derivative data from the corpus without allowing you to read text from the corpus).",
"passwordValidateButton":"Validate",
"moreToolsScale":"Tools by Scale",
"badPassword":"Sorry, that doesn't seem to be a valid access code."});
Ext.apply(Voyant.widget.StopListOption.i18n, {
"cancel":"Cancel",
"de":"German",
"hi":"Hindi",
"no":"Norwegian",
"auto":"Auto-detect",
"bg":"Bulgarian",
"noEditAutoMessage":"The auto-detected stoplist cannot be edited, please select a specifc stoplist such as the \"New User-Defined List\".",
"lt":"Latvian",
"lv":"Lithuanian",
"none":"None",
"fr":"French",
"hu":"Hungarian",
"br":"Breton",
"editStopListTitle":"Edit Stoplist",
"hy":"Armenian",
"se":"Swedish",
"ga":"Irish",
"id":"Indonesian",
"ok":"Save",
"ca":"Catalan",
"new":"New User-Defined List",
"gl":"Galician",
"el":"Greek",
"mu":"Multilingual",
"en":"English",
"label":"Stopwords:",
"cn":"Chinese",
"it":"Italian",
"noEditAutoTitle":"Edit Stoplist Error",
"es":"Spanish",
"editStopListMessage":"This is the stoplist, one term per line.",
"applyGlobally":"apply globally",
"eu":"Basque",
"editList":"Edit List",
"ar":"Arabic",
"th":"Thai",
"cz":"Czech",
"ja":"Japanese",
"ckb":"Kurdish",
"fa":"Farsi",
"ro":"Romanian",
"nl":"Dutch",
"tr":"Turkish"});
Ext.apply(Voyant.panel.Bubblelines.i18n, {
"findTerm":"Find Term",
"showTerm":"Show Term",
"corpusTooSmall":"The provided corpus is too small for this tool.",
"clearTerms":"Clear",
"removeTerm":"Remove Term",
"hideTerm":"Hide Term",
"title":"Bubblelines",
"type":"Visualization",
"separateLines":"Separate Lines for Terms",
"help":"Bubblelines visualizes the frequency and repetition of  a term's use in a corpus. Each document in the corpus is represented as a horizontal line and divided into segments of equal lengths. Each term is represented as a bubble, the size of the bubble indicates its frequency in the corresponding segment of text. The larger the bubble's radius the more frequently the term occurs.",
"total":"Total",
"granularity":"Granularity",
"options":"Options"});
Ext.apply(Voyant.panel.CorpusTerms.i18n, {
"relativePeakedness":"Peakedness",
"matchingTerms":"Matching terms: {count}",
"rawFreqTip":"The total count (raw frequency) of this term in the entire corpus.",
"relativeSkewness":"Skew",
"emptyText":"No matching results.",
"relativeFreqTip":"The relative frequency (per million) of this term in the entire corpus.",
"termTip":"The term in the corpus.",
"trendTip":"This represents the trend of the relative frequencies for each term in each document in the corpus.",
"title":"Terms",
"helpTip":"</p><p>Corpus Terms is a table view of terms that appear in the entire corpus. Features include:</p><ul><li>reordering by <i>term</i> and <i>count</i> (click on the column headers)</li><li>a sparkline graph of the term frequency trends across the corpus (if the corpus has multiple documents) or across the document (if the corpus has only one document)</li><li>additional columns available (relative frequency, distribution peakedness and skew) by clicking on the arrow that appears when hovering over a header</li><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>",
"relativePeakednessTip":"This is a statistical measure of how much the relative frequencies of a term in a corpus are bunched up into peaks (regions with higher values where the rest are lower).",
"relativeSkewnessTip":"This is a statistical measure of the symmetry of the relative frequencies of a term across the corpus."});
Ext.apply(Voyant.panel.NoTool.i18n, {
"notImplemented":"<p>The <i>{0}</i> tool existed in a previous version of Voyant Tools but has not been implemented in this version. Some tools may be reimplemented eventually while others are unlikely to be implemented because they were experimental, unuseful or dependent on technologies that are no longer supported (like Adobe Flash and Java Applets).</p><p>Please decide if you'd like to use the new version of Voyant or if you'd rather try using the <i>{0}</i> tool in the old version.</p>",
"badToolSpecified":"The <i>{0}</i> tool doesn't exist. You will be redirected to the main page of Voyant Tools.",
"currentButton":"Use Current Version",
"oldButton":"Use Old Version",
"noToolSpecified":"No tool has been specified. You will be redirected to the main page of Voyant Tools.",
"title":"No Such Tool",
"error":"Error"});
Ext.apply(Voyant.panel.CustomSet.i18n, {
"noSuchTool":"The specified tool ({0}) does not exist.",
"title":"Custom View",
"helpTip":"This is a custom view."});
Ext.apply(Voyant.panel.Catalogue.i18n, {
"facet.pubPlaceTitle":"Lieux de publication",
"queryMatches":"{0} documents correspondants (sur {1})",
"exportInProgress":"Préparation de votre corpus pour l'exportation…",
"facet.keywordTitle":"Mots-clés",
"exportTip":"Créer un nouveau corpus Voyant à partir des documents correspondants.",
"facet.titleTitle":"Titres",
"title":"Catalogue",
"lexicalTitle":"Termes",
"facet.authorTitle":"Auteurs",
"clickToOpenCorpus":"Veuillez <a href=\"{0}\" target=\"_blank\" class=\"link\">cliquer ici pour ouvrir votre corpus</a> (puisque les fenêtres surgissantes sont bloquées).",
"rawFreqs":"occurrences",
"facet.languageTitle":"Langues",
"noMatches":"Aucun résultat (dans {0} documents).",
"loadingSnippets":"recherche de texte…",
"facet.collectionTitle":"Collections",
"matchingDocuments":"nombre de documents correspondants",
"helpTip":"Le <i>catalogue</i> est une interface pour explorer le contenu de corpus plus larges à plusieurs documents, ainsi que pour la création de sous-ensembles de textes qui correspondent à certains critères de recherche. Le catalogue fonctionne un peu comme une base de données de bibliothèque ou d'un magain en ligne.",
"facet.pubDateTitle":"Dates de publication",
"export":"Exporter",
"facet.publisherTitle":"Maisons d'édition"});
Ext.apply(Voyant.panel.CollocatesGraph.i18n, {
"cleaning":"Cleaning",
"releaseToRemove":"Release to remove this term",
"context":"Context",
"clearTerms":"Clear",
"title":"Links",
"helpTip":"<p>Collocates graph shows a network graph of higher frequency terms that appear in proximity. Keywords are shown in blue and collocates (words in proximity) are showing in orange. Features include:</p><ul><li>hovering over keywords shows their frequency in the corpus</li><li>hovering over collocates shows their frequency in proximity (not their total frequency)</li><li>double-clicking on any word fetches more results</li><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>"});
Ext.apply(Voyant.panel.CollocatesSet.i18n, {
"title":"Scatter",
"helpTip":"This is a specialized view for working with scatterplots."});
Ext.apply(Voyant.panel.CorpusCreator.i18n, {
"cancel":"Cancel",
"accessModeWithoutPassword":"other access",
"xpathGroupBy":"Group by",
"reveal":"Reveal",
"tableNoHeadersRow":"No Headers Row",
"accessOptionsText":"If desired, specify one or more access passwords (separated by commas).",
"tableDocumentsRows":"from cells in each row",
"gearTip":"Options",
"tokenizationWordBoundaries":"Simple Word Boundaries",
"numberEmpty":"At least one column number is currently empty.",
"tokenization":"Tokenization",
"xpathContent":"Content",
"numbersNeedCommas":"Please use a comma to separate multiple numbers.",
"tableDocumentsTable":"from entire table",
"helpTip":"This tool allows you to create a corpus in one of three ways:<ol><li>by typing or pasting text into the text box and clicking <i>Reveal</i>; if each line in the text box is a URL, text is fetched from those URLs, otherwise the contents are treated as a single document</li><li>click the <i>Open</i> button to open an existing corpus</li><li>click the <i>Upload</i> button to upload one or more files from you computer (you can select multiple files by using the Ctrl and/or Shift keys)</li>",
"xmlOptionsText":"Define XPath Expressions for any of the following:",
"tableTitle":"Title",
"tableContent":"Content",
"xpathDocuments":"Documents",
"tokenizationAuto":"Automatic (highly recommended)",
"numbersCommasOnly":"Comma-separated numbers only.",
"tableOptionsText":"Specify how documents should be extracted (currently only supported for MS Excel: .xls, xlsx). For more information see the documentation on creating a corpus with <a href=\"{0}\" target=\"voyantdocs\">tabular data</a>.",
"inputFormat":"Input Format",
"tableDocumentsColumns":"from entire columns",
"accessModeWithoutPasswordText":"If you specify an <i>access password</i> you can also specify what access is granted to users without the password.",
"tableContentText":"Specify which column numbers contain content (or leave blank to use all columns). The left-most columnn is column 1. Define multiple documents by separating columns with a comma or combine columns by using the plus sign. For example 1+2,3 would combine columns 1 and 2 into one document and use column 3 for  a second document.",
"numberZero":"0 is invalid, the first column is 1",
"inputFormatAuto":"Auto-Detect (recommended)",
"unknownFiles":"unrecognized (possible error): ",
"fileTypesWarning":"File Types Warning",
"accessModeNone":"none",
"tokenizationOptions":"Tokenization",
"advancedOptionsText":"For more information on the advanced options below, see the documentation on <a href=\"{0}\" target=\"voyantdocs\">creating a corpus</a>.",
"tableDocuments":"Documents",
"fileTypesMessage":"You have one or more files with incompatible or unrecognized file extensions that may cause problems.",
"errorNotXmlContinue":"You've selected an XML input format but the input doesn't appear to be XML. Are you sure you wish to continue?",
"tableOptions":"Tables",
"xmlOptions":"XML",
"title":"Add Texts",
"error":"Error",
"sureContinue":"Are you sure you wish to continue?",
"badFiles":"incompatible (likely error): ",
"emptyInput":"Type in one or more URLs on separate lines or paste in a full text.",
"ok":"OK",
"accessPassword":"access code",
"adminPassword":"admin code",
"accessModeNonConsumptive":"limited (non-consumptive)",
"tableMetadataText":"These options are only used when documents are extracted from cells in each row (see the first option in this section). Same syntax as the Content option above: column numbers separated by commas or combined with a plus sign.",
"xpathAuthor":"Author",
"xpathTitle":"Title",
"invalidForm":"Invalid values have been used, please hover over fields with red boxes for explanations.",
"tableAuthor":"Author",
"gearWinTitle":"Options",
"uploadingCorpus":"Uploading corpus…",
"accessOptions":"Access Management",
"tableNoHeadersRowText":"Determines whether or not to skip the first row (if there's a header row). When there is a header row, it can be used to define the document title automatically when documents are extracted from entire columns (in this case leave the title field blank)."});
Ext.apply(Voyant.util.DetailedError.i18n, {
"error":"Erreur"});
Ext.apply(Voyant.panel.TopicContexts.i18n, {
"reset":"reset",
"title":"Topic Contexts",
"helpTip":"Topic Contexts"});
Ext.apply(Voyant.panel.Summary.i18n, {
"longest":"Longest: ",
"documentType":"<tpl for=\"types\"><a href=\"#\" onclick=\"return false\" class=\"document-type keyword\" voyant:recordid=\"{id}\" voyant:docindex=\"{docIndex}\">{type}</a> ({val})<tpl if=\"xindex < xcount\">, </tpl></tpl>",
"more":"More…",
"mostFrequentWords":"Most <b>frequent words</b> in the corpus: ",
"title":"Summary",
"numberOfTerms":"number of words in this document",
"lowest":"Lowest: ",
"docsLength":"Document Length: ",
"corpusType":"<tpl for=\"types\"><a href=\"#\" onclick=\"return false\" class=\"corpus-type keyword\" voyant:recordid=\"{id}\">{type}</a> ({val})<tpl if=\"xindex < xcount\">, </tpl></tpl>",
"seeAll":"All…",
"highest":"Highest: ",
"distinctiveWords":"<b>Distinctive words</b> (compared to the rest of the corpus): ",
"docsDensity":"Vocabulary Density: ",
"helpTip":"<p>The <i>Summary</i> tool provides general information about the corpus. Many elements in the tool are links that trigger other views. Features include:</p><ul><li>total words (tokens) and word forms (types) and age of the corpus</li><li>most frequent terms in the corpus</li><li>for corpora with more than one documen<ul><li>documents ordered by length and vocabulary density</li><li>distinctive words for each document (by TF-IDF score)</li></ul></li></ul>",
"moreDistinctiveWords":"<a href=\"#\" onclick=\"return false\">Next {0} of {1} remaining</a>",
"items":"items",
"shortest":"Shortest: "});
Ext.apply(Voyant.panel.BubblelinesSet.i18n, {
"title":"Bubblelines Skin",
"helpTip":"This is a specialized view for working with Bubblelines."});
Ext.apply(Voyant.panel.Knots.i18n, {
"findTerm":"Find Term",
"settings":"Settings",
"startAngle":"Start",
"tangles":"Turn",
"showTerm":"Show Term",
"clearTerms":"Clear",
"removeTerm":"Remove Term",
"hideTerm":"Hide Term",
"title":"Knots",
"type":"Visualization",
"noTermsFound":"No terms found in this document.",
"speed":"Speed",
"options":"Options",
"context":"Context"});
Ext.apply(Voyant.panel.CorpusSet.i18n, {
"title":"Corpus View",
"helpTip":"This is the default, general-purpose corpus view."});
Ext.apply(Voyant.VoyantApp.i18n, {
"serverResponseError":"The server error reponse:",
"error":"Error",
"translatedBy":"Traduction française de Stéfan Sinclair"});
Ext.apply(Voyant.panel.RezoViz.i18n, {
"noEntitiesForEdgeCount":"No entities were found. Would you like to reduce the minimum edge count to improve results?",
"loadingEntities":"Loading entities…",
"minEdgeCount":"Min. Edge Count",
"noEntities":"No entities to graph.",
"title":"RezoViz",
"stiffness":"Stiffness",
"people":"People",
"friction":"Friction",
"repulsion":"Repulsion",
"reload":"Reload",
"organizations":"Organizations",
"locations":"Locations",
"categories":"Categories"});
Ext.apply(Voyant.widget.DocumentSelector.i18n, {
"cancel":"Cancel",
"all":"all",
"selectAll":"All",
"documents":"Documents",
"ok":"Ok",
"selectNone":"None"});
Ext.apply(Voyant.panel.Contexts.i18n, {
"emptyText":"No matching results.",
"document":"Document",
"corpus":"corpus",
"limitedAccess":"This is a limited access corpus and this tool's functionality is restricted.",
"termTip":"The keyword for the context.",
"right":"Right",
"title":"Contexts",
"expand":"expand",
"documentTip":"The document of the occurrence.",
"left":"Left",
"corpusTip":"Reset to corpus mode (contexts from all documents).",
"rightTip":"Context to the right of the keyword.",
"context":"context",
"leftTip":"Context to the left of the keyword.",
"position":"Position",
"positionTip":"The position of the keyword within the document.",
"helpTip":"The Keywords in Context tool shows each occurrence of a keyword with a bit of surounding text (the context). It can be useful for studying more closely how terms are used in different contexts. Features include:<p></p><ul><li>reordering document, by keyword or by left or right context</li><li>a search box for queries (hover over the magnifying icon for help with the syntax)</li></ul>"});
Ext.apply(Voyant.VoyantDefaultApp.i18n, {
"voyantIs":"<p style=\"text-align: center; font-style: italic;\">Voyant Tools is a web-based reading and analysis environment for digital texts – please visit <a href=\"http://hermeneuti.ca/\" target=\"_blank\">Hermeneuti.ca</a> for more information..</p>",
"noViewKnownErrorTpl":"The selected view ({view}) has not been migrated from the previous version of Voyant (and probably won't be). {additional} The default view will be used instead.",
"convertSkinMsg":"The convert skin was used for document exporting and that functionality is now available from the Documents tool.",
"noViewErrorTitle":"View Error",
"helpTip":"Voyant Tools is a web-based reading and analysis environment for digital texts.<p></p>",
"noViewErrorTpl":"No view was found with the name \"<i>{view}</i>\". The default view will be used instead."});
Ext.apply(Voyant.widget.Facet.i18n, {
"emptyText":"No values found."});
Ext.apply(Voyant.panel.ScatterPlot.i18n, {
"relFreq":"Relative",
"xAxis":"X Axis",
"termsLabel":"Terms",
"summaryLabel":"Summary",
"title":"ScatterPlot",
"nearby":"Nearby",
"remove":"Remove",
"pca":"Principal Components Analysis",
"docSim":"Document Similarity",
"noTermSelected":"No term selected.",
"freqsMode":"Frequencies",
"terms":"Terms",
"tokenFreqTip":"<b>{0}</b><br><b>Raw Frequency</b><br>{1}<br><b>Relative Frequency</b><br>{2}",
"term":"Term",
"docFreqTip":"<b>{0}</b><br><b>Word Count</b><br>{1}",
"rawFrequencies":"Raw Frequencies",
"dimension":"Dimension",
"helpTip":"<p>ScatterPlot displays the correspondance of word use in a corpus. This visualization relies on a statistical analysis that takes the word’s correspondance from each document (where each document represents a dimension) and reduces it to a three dimensional space to easily visualize the data through a scatterplot.</p>",
"ca":"Correspondence Analysis",
"clusters":"Clusters",
"pcTitle":"Percentage of Total Variation Explained by Each Component",
"relativeFrequencies":"Relative Frequencies",
"addTerm":"Add Term",
"numTerms":"Terms",
"removeTerm":"Remove <b>{0}</b>",
"tfidf":"TF-IDF",
"analysis":"Analysis",
"fill":"Fill",
"loading":"Loading",
"labels":"Labels",
"freqsModeTip":"Determines if frequencies are expressed as relative counts, raw counts, or as TF-IDF.",
"yAxis":"Y Axis",
"pc":"PC",
"nearbyTerm":"Nearby <b>{0}</b>",
"docsLabel":"Documents",
"rawFreq":"Raw",
"caTitle":"Percentage of Total Assocation Explained by Each Dimension",
"dimensions":"Dimensions"});
Ext.apply(Voyant.panel.VoyantFooter.i18n, {
"voyantTools":"Voyant Tools",
"privacy":"Privacy",
"voyantLink":"<a href=\"http://docs.voyant-tools.org/\" target=\"_blank\">Voyant Tools</a>",
"privacyMsg":"The developers of Voyant Tools gather data from the site about what tools are invoked and with what parameters (IP addresses are also logged in order to be able to identify multiple requests during a same session). In addition, Voyant Tools uses Google Analytics (see &lt;a href=\"http://www.google.ca/intl/en/policies/privacy/\" target=\"_blank\"&gt;Google's Privacy Policy&lt;/a&gt; and the &lt;em&gt;Log Information&lt;/em&gt; section in particular). Locally logged data and Google Analytics data will be used by the development team in order to debug and improve the tools, as well as to understand how researchers are using them. This data may also be used for research purposes in anonymous and aggregate forms. Please note that texts submitted to Voyant Tools are stored in order to allow persistent access during a work session and between work sessions. If you have questions about the data being collected and how it is being used, or to request that a corpus be removed, please contact &lt;a href=\"http://stefansinclair.name/contact/\"&gt;Stéfan Sinclair&lt;/a&gt;."});
Ext.apply(Voyant.widget.QuerySearchField.i18n, {
"querySearchTip":"<div>Search syntax (press enter/return to trigger a search):</div><ul style=\"margin-top: 3px; margin-bottom: 3px;\"><li><b>coat</b>: match exact term <i>coat</i></li><li><b>coat*</b>: match terms that start with <i>coat</i> as one term</li><li><b>^coat*</b>: match terms that start with <i>coat</i> as separate terms (coat, coats, etc.)</li><li><b>coat,jacket</b>: match each term separated by commas as separate terms</li><li><b>coat|jacket</b>: match terms separate by pipe as a single term</li><li><b>\"winter coat\"</b>: <i>winter coat</i> as a phrase</li><li><b>\"coat mittens\"~5</b>: <i>coat</i> near <i>mittens</i> (within 5 words)</li><li><b>^coat*,jacket|parka,\"coat mittens\"~5</b>: combine syntaxes</li></ul>",
"querySearchDocsModeTip":"<div>Search syntax for documents (press enter/return to trigger a search):</div><ul style=\"margin-top: 3px; margin-bottom: 3px;\"><li><b>coat</b>: match exact term <i>coat</i></li><li><b>coat*</b>: match terms that start with <i>coat</i></li><li><b>coat,jacket</b>: match each term separated by commas as separate terms</li><li><b>\"winter coat\"</b>: <i>winter coat</i> as a phrase</li><li><b>\"coat mittens\"~5</b>: <i>coat</i> near <i>mittens</i> (within 5 words)</li><li><b>+winter +coat</b>: match every term preceded by a plus (+)</li><li><b>+\"winter coat\" +mitten*</b>: combine syntaxes</li></ul>",
"querySearch":"Search",
"aggregateInDocumentsCount":"This is the number of documents that satisfy the search criteria (every counted document contains at least one of the search terms)."});
Ext.apply(Voyant.panel.Subset.i18n, {
"publisherLabel":"Publishers",
"sendToVoyantButton":"New Voyant Corpus",
"downloadButton":"Download Zip Archive",
"sendToVoyantNoQuery":"There's currently no query specified, but you can <a href=\"{0}\" target=\"_blank\">open the current corpus in a new window</a>.",
"lexicalLabel":"Full-text",
"noMatches":"The current query criteria don't match any documents, please modifying the search first.",
"titleLabel":"Titles",
"authorLabel":"Authors",
"title":"Workset Builder"});
