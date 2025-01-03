import type { Schema, Struct } from '@strapi/strapi';

export interface PageButton extends Struct.ComponentSchema {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Buy now'>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHighlight extends Struct.ComponentSchema {
  collectionName: 'components_page_highlights';
  info: {
    displayName: 'highlight';
    icon: 'star';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    buttonLabel: Schema.Attribute.String & Schema.Attribute.Required;
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    floatImage: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagePopularGames extends Struct.ComponentSchema {
  collectionName: 'components_page_popular_games';
  info: {
    displayName: 'popularGames';
    icon: 'cog';
  };
  attributes: {
    games: Schema.Attribute.Relation<'oneToMany', 'api::game.game'>;
    highlight: Schema.Attribute.Component<'page.highlight', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageRibbon extends Struct.ComponentSchema {
  collectionName: 'components_page_ribbons';
  info: {
    description: '';
    displayName: 'ribbon';
    icon: 'priceTag';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    size: Schema.Attribute.Enumeration<['small', 'normal']> &
      Schema.Attribute.DefaultTo<'normal'>;
    text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

export interface PageRibon extends Struct.ComponentSchema {
  collectionName: 'components_page_ribons';
  info: {
    displayName: 'ribon';
    icon: 'priceTag';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    size: Schema.Attribute.Enumeration<['small', 'normal']> &
      Schema.Attribute.DefaultTo<'normal'>;
    text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

export interface PageSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections';
  info: {
    displayName: 'section';
    icon: 'bulletList';
  };
  attributes: {
    highlight: Schema.Attribute.Component<'page.highlight', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.button': PageButton;
      'page.highlight': PageHighlight;
      'page.popular-games': PagePopularGames;
      'page.ribbon': PageRibbon;
      'page.ribon': PageRibon;
      'page.section': PageSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
