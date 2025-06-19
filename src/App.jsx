import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "remoteApp/Header";
import Button from "remoteApp/Button";

function App() {
    const [articleFontSize, setArticleFontSize] = useState(16);

    function increaseFont() {
        articleFontSize < 32 && setArticleFontSize(prev => prev + 1);
    }

    function decreaseFont() {
        articleFontSize > 12 && setArticleFontSize(prev => prev - 1);
    }

    return (
        <>
            <Header text="About Module Federation" />
            <div className="article_font_size">
                <Button onClick={decreaseFont}>A-</Button>
                <Button onClick={increaseFont}>A+</Button>
            </div>
            <article style={{fontSize: articleFontSize}}>
                <p>
                    Module Federation is an architectural pattern, popularized by Webpack,
                    that allows multiple JavaScript applications or Micro Frontends to
                    share code and resources at runtime. It enables a more modular and
                    maintainable approach to building complex web applications by breaking
                    them down into smaller, independent modules that can be developed,
                    deployed, and updated independently.
                </p>
                <p>Here's a more detailed explanation:</p>
                <p class="heading_2"><strong>Key Concepts:</strong></p>
                <p>
                    <strong>Micro Frontends:</strong> Module Federation is often used to
                    implement microfrontend architectures, where a large application is
                    composed of smaller, independent web applications.
                </p>
                <p>
                    <strong>Code Sharing:</strong> Instead of duplicating code across
                    different applications, Module Federation allows applications to
                    dynamically load and use code (modules) from other applications at
                    runtime.
                </p>
                <p>
                    <strong>Decentralized Development:</strong> Teams can work on
                    different parts of the application (micro frontends) independently,
                    with their own release cycles, and still share common code.
                </p>
                <p>
                    <strong>Runtime Loading:</strong> Modules are not bundled into the
                    main application at build time. Instead, they are loaded dynamically
                    when needed during runtime.
                </p>
                <p>
                    <strong>Webpack Plugin:</strong> Module Federation is a feature of
                    Webpack, a popular module bundler, and is enabled through a plugin.
                </p>
                <p class="heading_2"><strong>Benefits:</strong></p>
                <p>
                    <strong>Reduced Code Duplication:</strong> Sharing code reduces the
                    overall size of the application bundle and improves maintainability.
                </p>
                <p>
                    <strong>Faster Development Cycles:</strong> Independent teams can work
                    on different parts of the application without waiting for each other.
                </p>
                <p>
                    <strong>Improved Scalability:</strong> Micro frontends can be scaled
                    independently based on their specific needs.
                </p>
                <p>
                    <strong>Increased Flexibility:</strong> Teams can choose different
                    technologies and release cadences for different parts of the
                    application.
                </p>
                <p class="heading_2"><strong>How it works:</strong></p>
                <ol>
                    <li>
                        <strong>Exposing Modules:</strong> One application (the "host" or
                        "shell") can expose certain modules as "remote" modules.
                    </li>
                    <li>
                        <strong>Consuming Modules:</strong> Other applications (the "remote"
                        or "consumer") can then import and use these exposed modules, as if
                        they were part of their own codebase.
                    </li>
                    <li>
                        <strong>Dynamic Loading:</strong> Webpack handles the dynamic
                        loading of these remote modules at runtime.
                    </li>
                </ol>
                <p>
                    In essence, Module Federation allows you to build a large application
                    as a collection of independent, interconnected, and dynamically loaded
                    modules, leading to a more modular, maintainable, and scalable
                    architecture.
                </p>
            </article>
        </>
    );
}

export default App;
