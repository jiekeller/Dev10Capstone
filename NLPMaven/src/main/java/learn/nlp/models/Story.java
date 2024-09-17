package learn.nlp.models;

import java.time.LocalDate;
import java.util.Objects;

public class Story {
    private Author author;
    private int id;
    private String title;
    private String description;
    private String text;
    private String publishedDate;
    private Category category;

    public Story() {
    }

    public Story(int id, String title, Author author, String description, String text, String publishedDate, Category category) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.text = text;
        this.publishedDate = publishedDate;
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Author getAuthor() {return author;}

    public void setAuthor(Author author) {this.author = author;}

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getPublishedDate() {
        return publishedDate;
    }

    public void setPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Story story)) return false;
        return id == story.id && Objects.equals(title, story.title) && Objects.equals(description, story.description) && Objects.equals(text, story.text) && Objects.equals(publishedDate, story.publishedDate) && category == story.category;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, text, publishedDate, category);
    }
}
