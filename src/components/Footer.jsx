import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { HiOutlineClipboardCopy, HiClipboardCopy } from 'react-icons/hi';
import {
    FooterContainer,
    FooterBlock,
    CodeSnippet,
    CodeSection,
    TooltipCard,
    TooltipBox,
} from '../styles';

function Footer() {
    const [isCopied, setIsCopied] = useState(false);

    const snippet = `
  contact@thomasjean.dev
  `;

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    return (
        <FooterContainer>
            <FooterBlock>
                <CodeSnippet>
                    <TooltipCard>
                        <CodeSection>
                            {snippet}
                            <CopyToClipboard text={snippet} onCopy={onCopyText}>
                                <span>
                                    {isCopied ? (
                                        <HiClipboardCopy />
                                    ) : (
                                        <HiOutlineClipboardCopy />
                                    )}
                                </span>
                            </CopyToClipboard>
                        </CodeSection>
                        <TooltipBox>Copier l'adresse</TooltipBox>
                    </TooltipCard>
                </CodeSnippet>
            </FooterBlock>
            <FooterBlock>
                <span>
                    Ce site est développé avec{' '}
                    <a
                        href="https://fr.reactjs.org/"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src="/logos/react-wordmark.svg"
                            alt="Next.js"
                            style={{ height: '20px' }}
                        />
                    </a>{' '}
                    et hébergé sur{' '}
                    <a
                        href="https://netlify.com/"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src="/logos/netlify-wordmark.svg"
                            alt="Netlify"
                            style={{ height: '15px' }}
                        />
                    </a>
                </span>
            </FooterBlock>
        </FooterContainer>
    );
}

export default Footer;
